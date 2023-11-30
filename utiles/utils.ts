import { eventDataInterface } from "../interace";

export const featureEvents = (data: eventDataInterface[]) =>
  data.filter((event) => event.isFeatured);

export const readabelDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const foramtedString = (data: string) => data.replace(", ", "\n");

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getEventById = (data: eventDataInterface[], id: string) =>
  data.find((event) => event.id === id);

export const filterDataByData = (
  data: eventDataInterface[],
  month: number,
  year: number
) => {
  return data.filter((event) => {
    const date = new Date(event.date);
    return date.getFullYear() == year && date.getMonth() == month;
  });
};

export const urlEvents =
  "https://glowing-arcadia-352515-default-rtdb.firebaseio.com/Events.json";
