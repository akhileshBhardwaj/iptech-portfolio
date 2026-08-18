// Video

import iptech from "../../../assets/video/ugcVideos/iptech.mp4";
import ipt from "../../../assets/video/ugcVideos/ipt.mp4";
import vid3 from "../../../assets/video/ugcVideos/vid3.mp4";
import vid4 from "../../../assets/video/ugcVideos/vid4.mp4";

//Poster

import iptechPoster from "../../../assets/video/ugcVideos/iptechPoster.png";
import vid3Poster from "../../../assets/video/ugcVideos/vid3Poster.png";
import vid4Poster from "../../../assets/video/ugcVideos/vid4Poster.png";
import iptPoster from "../../../assets/video/ugcVideos/iptPoster.jpg";

const ugcVideos = [
  {
    id: "ugc-01",
    title: "Skincare Routine That Went Viral",
    brand: "Lumière Skincare",
    description:
      "Authentic morning routine that generated high engagement and improved customer trust.",
    duration: "00:42",
    poster: iptechPoster,
    src: iptech,
  },

  {
    id: "ugc-02",
    title: "A Day In My Capsule Wardrobe",
    brand: "Norr Studio",
    description:
      "Real-customer styling content that doubled click-through rate on the product page.",
    duration: "00:58",
    poster: iptPoster,
    src: ipt,
  },

  {
    id: "ugc-03",
    title: "30-Minute Home Workout, No Equipment",
    brand: "Pulse Fitness App",
    description:
      "Creator-led workout demo that drove a 3x lift in free-trial signups.",
    duration: "01:12",
    poster: vid3Poster,
    src: vid3,
  },

  {
    id: "ugc-04",
    title: "Unboxing The Desk Setup Everyone Asked For",
    brand: "Kaira Tech",
    description:
      "Unfiltered first impressions that turned into our best-performing paid ad.",
    duration: "00:36",
    poster: vid4Poster,
    src: vid4,
  },
];

export default ugcVideos;
