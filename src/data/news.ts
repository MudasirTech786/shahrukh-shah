import type { NewsArticle } from "@/types";

import newsWolfHour from "./images/home-wolf-hour.jpg";
import newsUncleFrank from "./images/home-uncle-frank.jpg";
import newsBetway from "./images/home-betway.jpg";
import newsAnomaly from "./images/home-anomaly-full.jpg";
import newsFarCry from "./images/home-far-cry-sermon.jpg";

export const newsArticles: NewsArticle[] = [
  {
    title: "Betway ‘Evolution’ launches globally",
    date: "2021-09-01",
    excerpt:
      "The campaign, shot by Khalid Mohtaseb, rolls out across international markets with a set of cinematic spots built around light and motion.",
    image: newsBetway,
    imageAlt: "Betway — Evolution campaign still",
    href: "https://vimeo.com/641516832",
  },
  {
    title: "Uncle Frank named in Film Independent Spirit Award conversation",
    date: "2020-11-20",
    excerpt:
      "Alan Ball’s directorial feature, photographed by Khalid, lands on the season’s awards conversation following its festival premiere.",
    image: newsUncleFrank,
    imageAlt: "Uncle Frank — film still",
  },
  {
    title: "The Wolf Hour premieres at Telluride",
    date: "2019-08-29",
    excerpt:
      "The thriller starring Naomi Watts opens at the Telluride Film Festival to strong reviews for its brooding, single-location atmosphere.",
    image: newsWolfHour,
    imageAlt: "The Wolf Hour — film still",
  },
  {
    title: "Far Cry ‘The Sermon’ behind the scenes",
    date: "2018-03-15",
    excerpt:
      "A look inside the shoot for the Far Cry campaign, from the soaked motel set to the final grade.",
    image: newsFarCry,
    imageAlt: "Far Cry — The Sermon campaign still",
  },
  {
    title: "Anomaly honored at Cannes Lions",
    date: "2016-06-20",
    excerpt:
      "The award-winning full film, photographed by Khalid, adds a Cannes Lions statue to its run.",
    image: newsAnomaly,
    imageAlt: "Anomaly — full film still",
  },
];
