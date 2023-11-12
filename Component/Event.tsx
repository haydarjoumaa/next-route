import Link from "next/link";
import { eventDataInterface } from "../interace";
import { foramtedString, readabelDate } from "@/utiles/utils";
import { Card } from "./Card";

export const Event = ({ eventData }: { eventData: eventDataInterface }) => {
  return (
    <Card>
      <div className="flex gap-4">
        <img src={eventData.image} alt={eventData.description} />
        <div>
          <h1>{eventData.title}</h1>
          <div>
            <time>{readabelDate(eventData.date)}</time>
          </div>
          <div>
            <address>{foramtedString(eventData.location)}</address>
          </div>
          <Link href={`/${eventData.id}`}>Explore Event</Link>
        </div>
      </div>
    </Card>
  );
};
