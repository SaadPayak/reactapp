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
    category: "YOUR FEED",
    items: [
      { icon: faBolt, title: "For You", id: 1, navigationUrl: "" },
      {
        icon: faChartSimple,
        title: "Top 100",
        id: 2,
        navigationUrl: "/top-10",
      },
      { icon: faSliders, title: "Mixes", id: 3, navigationUrl: "" },
    ],
  },
  {
    category: "YOUR LIBRARY",
    items: [
      { icon: faHeart, title: "Liked", id: 4, navigationUrl: "" },
      { icon: faClock, title: "Listen Later", id: 5, navigationUrl: "" },
      { icon: faHistory, title: "History", id: 6, navigationUrl: "" },
      { icon: faRecordVinyl, title: "Podcasts", id: 7, navigationUrl: "" },
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
