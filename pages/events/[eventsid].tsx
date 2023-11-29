import EventDetailContent from "@/Component/EventFolder/EventDetailContent";
import EventDetailHeader from "@/Component/EventFolder/EventDetailHeader";
import { eventDataInterface } from "@/interace";
import { featureEvents, getEventById, urlEvents } from "@/utiles/utils";

const EventsDetail = ({
  choosenEvent,
}: {
  choosenEvent: eventDataInterface;
}) => {
  if (typeof choosenEvent == "undefined") {
    return <p className="mt-20">...Loading</p>;
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

export const getStaticPaths = async () => {
  const response = await fetch(urlEvents);

  const dataJson: eventDataInterface[] = await response.json();

  const featureId = featureEvents(dataJson).map((event) => ({
    params: { eventsid: event.id },
  }));
  return {
    paths: featureId,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { eventsid: string };
}) => {
  const response = await fetch(urlEvents);

  const dataJson: eventDataInterface[] = await response.json();

  const choosenEvent = getEventById(dataJson, params.eventsid);

  if (!choosenEvent) {
    return { notFound: true };
  }

  return {
    props: { choosenEvent },
  };
};

export default EventsDetail;
