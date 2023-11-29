import useSWR from "swr";
import { Event } from "./Event";
import { urlEvents } from "@/utiles/utils";
import { eventDataInterface } from "@/utiles/interace";
import { useEffect, useState } from "react";

const AllEvents = () => {
  const [event, setEvent] = useState<eventDataInterface[]>();

  useEffect(() => {
    fetch(urlEvents)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);
  if (!event) return <div>...Loading</div>;

  return (
    <div className="flex mt-20 gap-20 w-full flex-col items-center">
      {event.map((evt, index) => {
        return <Event eventData={evt} key={evt.id} />;
      })}
    </div>
  );
};

export default AllEvents;
