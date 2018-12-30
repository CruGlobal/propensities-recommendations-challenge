package org.cru.digital

case class Connection(to: String, from: String, sourceType: String, number: Int)

object Connection {

  /** Build Connection from CSV format.
    *
    * @param terms the map of terms in the CSV
    * @return the case class version of the entry
    */
  def apply(terms: Map[String, String]): Connection = {
    Connection(terms("curr"), terms("refr"), terms("refr_type"), terms("n").toInt)
  }

}