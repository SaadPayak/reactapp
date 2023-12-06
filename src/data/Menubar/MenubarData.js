import {
  faChartSimple,
  faBolt,
  faSliders,
  faHeart,
  faClock,
  faHistory,
  faRecordVinyl,
  faSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const menubarItems = [
  {
    category: "YOUR FEED",
    items: [
      { icon: faBolt, title: "For You", id: 1, navigationUrl: "/" },
      {
        icon: faChartSimple,
        title: "Top 10",
        id: 2,
        navigationUrl: "/top-10",
      },
      { icon: faSliders, title: "Mixes", id: 3, navigationUrl: "/mixes" },
      {
        icon: faUser,
        title: "Artists",
        id: 4,
        navigationUrl: "/artists",
      },
    ],
  },
  {
    category: "YOUR LIBRARY",
    items: [
      { icon: faHeart, title: "Liked", id: 5, navigationUrl: "/liked" },
      { icon: faClock, title: "Listen Later", id: 6, navigationUrl: "" },
      { icon: faHistory, title: "History", id: 7, navigationUrl: "" },
      { icon: faRecordVinyl, title: "Podcasts", id: 8, navigationUrl: "" },
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
      id: 9,
    },
    { icon: faSquare, iconColor: "text-green-400", title: "Rap", id: 10 },
    { icon: faSquare, iconColor: "text-blue-400", title: "Meera♥️", id: 11 },
    { icon: faSquare, iconColor: "text-yellow-400", title: "Sad", id: 12 },
  ],
};
