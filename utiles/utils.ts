import { eventDataInterface } from "../interace";

export const DUMMY_EVENTS: eventDataInterface[] = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image:
      "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.901340414.1668711780&semt=ais",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image:
      "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?size=626&ext=jpg&ga=GA1.1.901340414.1668711780&semt=ais",
    isFeatured: true,
  },
];

export const featureEvents = () =>
  DUMMY_EVENTS.filter((event) => event.isFeatured);

export const getEventById = (id: string) =>
  DUMMY_EVENTS.find((event) => event.id === id);

export const readabelDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const foramtedString = (data: string) => data.replace(", ", "\n");
