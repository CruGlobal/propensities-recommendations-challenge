package org.cru.digital

import java.io.File
import java.nio.file.{Files, Paths}
import scala.collection.JavaConverters._

import com.github.tototoshi.csv.{CSVReader, CSVWriter}

object Main extends App {

  val clickStreamReader = CSVReader.open(new File("/home/recon/Cru/DataParsing/src/main/resources/cru_org_clickstream.csv"))
  //  val contentReader = CSVReader.open(new File("/home/recon/Cru/DataParsing/src/main/resources/content_info.csv"))
  val rawContent: Seq[Seq[String]] = Files.readAllLines(Paths.get("/home/recon/Cru/DataParsing/src/main/resources/content_info.txt")).asScala.tail.dropRight(1).map(_.split("\t")).map(_.toSeq)
  val contentData = rawContent.map(Content(_))
  val mostLikelyMap = clickStreamReader.allWithHeaders.map(Connection(_)).filter(_.sourceType == "internal").groupBy(_.from).map {
    case (from, connections) => from -> connections.maxBy(_.number).to
  }
  val out = contentData.map(content => content.toCsv(mostLikelyMap, contentData.filter(_ != content).toList))
//  val labeledOut: Seq[Seq[String]] = Seq("url", "level", "title", "description", "tags", "most_likely", "recommended", "same_level") +: out
  val labeledOut: Seq[Seq[String]] = Seq("url", "level", "title", "description", "tags", "recommended_1", "recommended_2", "recommended_3") +: out

  //  val writer = CSVWriter.open("/home/recon/Cru/DataParsing/src/main/resources/content_info_annotated.csv")
  val writer = CSVWriter.open("/home/recon/Cru/DataParsing/src/main/resources/content_info_triple_rec.csv")

  writer.writeAll(labeledOut)

}
