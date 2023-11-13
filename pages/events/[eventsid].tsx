import EventDetailContent from "@/Component/EventFolder/EventDetailContent";
import EventDetailHeader from "@/Component/EventFolder/EventDetailHeader";
import { getEventById } from "@/utiles/utils";
import { useRouter } from "next/router";

const EventsDetail = () => {
  const router = useRouter();
  const choosenEvent = getEventById(router.query.eventsid as string);
  if (typeof choosenEvent == "undefined") {
    return <p>Event don't Exist</p>;
  }
  return (
    <>
      <EventDetailHeader title={choosenEvent.title} />
      <EventDetailContent
        img={choosenEvent.image}
        date={choosenEvent.date}
        location={choosenEvent.location}
      />
      <div className="flex justify-center mt-10 w-1/2 text-4xl font-bold m-auto text-center">
        {choosenEvent.description}
      </div>
    </>
  );
};
export default EventsDetail;
