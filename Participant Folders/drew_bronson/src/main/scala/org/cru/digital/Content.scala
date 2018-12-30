package org.cru.digital

import scala.util.Random

case class Content(url: String, level: Int, title: String, description: String, tags: List[String],
                   previous: Option[Content] = None, next: Option[Content] = None, author: Option[String] = None) {

  def toCsv(mostLikelyMap: Map[String, String], candidates: List[Content]): Seq[String] = {
//    Seq(url, level.toString, title, description, "{" + tags.mkString(",") + "}") ++ additionalFields(mostLikelyMap, candidates)
    Seq(url, level.toString, title, description, "{" + tags.mkString(",") + "}") ++ tripleRecommendation(mostLikelyMap, candidates)
  }

  def additionalFields(mostLikelyMap: Map[String, String], candidates: List[Content]): Seq[String] = {
    Seq(mostLikelyMap.getOrElse(url, ""),
      recommended(candidates) match {
        case None => ""
        case Some(recommendation) => recommendation.url
      },
      sameLevel(candidates) match {
        case None => ""
        case Some(recommendation) => recommendation.url
      })
  }

  /** Three recommendations from the same source.
    *
    * @param candidates candidates excluding the current article
    * @return triple recommendation for appending to the CSV
    */
  //TODO this doesn't need to take in mostLikelyMap
  def tripleRecommendation(mostLikelyMap: Map[String, String], candidates: List[Content]): Seq[String] = {
    Seq(
      recommended(candidates) match {
        case None => ""
        case Some(recommendation) => recommendation.url
      },
      recommended(candidates) match {
        case None => ""
        case Some(recommendation) => recommendation.url
      },
      recommended(candidates) match {
        case None => ""
        case Some(recommendation) => recommendation.url
      }
    )
  }

  /** The article recommended to read next.
    *
    * @param candidates a list of candidates which does not include the current article
    * @return a recommended article to read next
    */
  def recommended(candidates: List[Content]): Option[Content] = {
    if (next.nonEmpty) {
      next
    } else {
      val correctLevelCandidates = candidates.filter(_.level == recommendedLevel)
      val sameAuthorCandidates = author match {
        // TODO make sure this works with options properly
        case None => List()
        case notNone => correctLevelCandidates.filter(_.author == notNone)
      }
      Some(Random.shuffle(related(sameAuthorCandidates)).headOption.getOrElse {
        Random.shuffle(related(correctLevelCandidates)).headOption.getOrElse {
          Random.shuffle(correctLevelCandidates).headOption.getOrElse {
            Random.shuffle(candidates).head
          }
        }
      })
    }
  }

  def recommendedLevel: Int = {
    if (level >= 8) level else level + 1
  }

  def related(candidates: List[Content]): List[Content] = {
    mostSpecificTopic match {
      case None => List()
      case Some(topic) => candidates.filter(_.addressesTopic(topic)) match {
        case List() => this.copy(tags = tags.dropRight(1)).related(candidates)
        case nonEmpty => nonEmpty
      }
    }
  }

  def addressesTopic(topic: String): Boolean = {
    tags contains topic
  }

  /** The most specific topic addressed by this article.
    *
    * Assumes that topics go from least specific to most specific in the tag list.
    *
    * @return the most specific topic addressed by this article
    */
  def mostSpecificTopic: Option[String] = {
    tags match {
      case List() => None
      case _ => Some(tags.last)
    }
  }

  def sameLevel(candidates: List[Content]): Option[Content] = {
    Random.shuffle(candidates.filter(_.level == level)).headOption
  }
}

object Content {

  /** Build Content from CSV.
    *
    * @param terms the list of terms in the CSV
    * @return corresponding case class
    */
  def apply(terms: Seq[String]): Content = {
    def tags(raw: String): List[String] = {
      raw.replace("{", "").split(",").toList
    }

    if (terms.size < 5) {
      Content(terms ++ Seq(""))
    } else {
      Content(terms.head, terms(1).toInt, terms(2), terms(3), tags(terms(4)))
    }
  }

}
