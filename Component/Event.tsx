import { eventDataInterface } from "../interace";
import { foramtedString, readabelDate } from "@/utiles/utils";
import { Card } from "./UI/Card";
import CalendarIcon from "./Icons/CalendarIcon";
import ButtonLink from "./UI/ButtonLink";
import LocationIcon from "./Icons/LocationIcon";

export const Event = ({ eventData }: { eventData: eventDataInterface }) => {
  return (
    <Card>
      <div className="flex gap-4 h-[400px]">
        <img
          src={eventData.image}
          alt={eventData.description}
          className="min-w-[60%]  object-fill"
        />
        <div className="flex flex-col gap-10 w-full mt-4">
          <h1 className="text-3xl	font-bold">{eventData.title}</h1>
          <div>
            <time className="font-bold text-2xl">
              <CalendarIcon /> {readabelDate(eventData.date)}
            </time>
          </div>
          <div>
            <address className="text-xl">
              <LocationIcon /> {foramtedString(eventData.location)}
            </address>
          </div>
          <ButtonLink link={`/events/${eventData.id}`} />
        </div>
      </div>
    </Card>
  );
};
