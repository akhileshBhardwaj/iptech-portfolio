// Scripted Video

import iptech from '../../../assets/video/scriptedVideo/iptech.mp4'
import ipt from '../../../assets/video/scriptedVideo/ipt.mp4'
import vid3 from '../../../assets/video/scriptedVideo/vid3.mp4'
import vid4 from '../../../assets/video/scriptedVideo/vid4.mp4'


// Poster

import iptechPoster from '../../../assets/video/scriptedVideo/iptechPoster.png'
import vid3Poster from '../../../assets/video/scriptedVideo/vid3Poster.png'
import vid4Poster from '../../../assets/video/scriptedVideo/vid4Poster.png'
import iptPoster from '../../../assets/video/scriptedVideo/iptPoster.jpg'


const scriptedVideos = [
  {
    id: "sv-01",
    title: "Flavors of the Valley",
    brand: "Wanderlust Kitchen",
    description:
      "A scripted journey through misty valleys, waterfalls, and the flavors that grow around them.",
    duration: "10:15",
    poster: iptPoster,
    src: ipt,
  },

  {
    id: "sv-02",
    title: "Learn Guitar in 30 Days",
    brand: "StringSchool",
    description:
      "A cozy, scripted walkthrough that turns absolute beginners into confident guitar players.",
    duration: "12:45",
    poster: iptechPoster,
    src: iptech,
  },

  {
    id: "sv-03",
    title: "Home Office Setup Ideas",
    brand: "DeskCraft",
    description:
      "A clean, scripted breakdown of desk setups that balance minimal style with real productivity.",
    duration: "07:30",
    poster: vid3Poster,
    src: vid3,
  },

  {
    id: "sv-04",
    title: "Street Food of India",
    brand: "SpiceTrail",
    description:
      "A scripted tour through vibrant markets, chopping boards, and the spices that bring it all together.",
    duration: "09:12",
    poster: vid4Poster,
    src: vid4,
  },
];

export default scriptedVideos;