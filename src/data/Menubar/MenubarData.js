import {
  faChartSimple,
  faBolt,
  faSliders,
  faHeart,
  faClock,
  faHistory,
  faRecordVinyl,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

export const menubarItems = [
  {
    category: "FOR YOU",
    items: [
      { icon: faChartSimple, title: "Top 100", id: 1 },
      { icon: faBolt, title: "Recommended", id: 2 },
      { icon: faSliders, title: "Mixes", id: 3 },
    ],
  },
  {
    category: "YOUR LIBRARY",
    items: [
      { icon: faHeart, title: "Liked", id: 4 },
      { icon: faClock, title: "Listen Later", id: 5 },
      { icon: faHistory, title: "History", id: 6 },
      { icon: faRecordVinyl, title: "Podcasts", id: 7 },
    ],
  },
];

export const playlists = {
  category: "YOUR PLAYLIST",
  items: [
    {
      icon: faSquare,
      iconColor: "text-purple-400",
      title: "Bolywood Hindi",
      id: 8,
    },
    { icon: faSquare, iconColor: "text-green-400", title: "Rap", id: 9 },
    { icon: faSquare, iconColor: "text-blue-400", title: "Meera♥️", id: 10 },
    { icon: faSquare, iconColor: "text-yellow-400", title: "Sad", id: 11 },
  ],
};
