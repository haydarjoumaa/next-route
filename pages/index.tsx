import { Event } from "@/Component/EventFolder/Event";
import { eventDataInterface } from "@/utiles/interace";
import { urlEvents } from "@/utiles/utils";

const HomePage = ({ data }: { data: eventDataInterface[] }) => {
  const events = data;
  if (!events) {
    return <p className="mt-20">No data found</p>;
  }
  return (
    <div className="flex mt-20  gap-20 justify-center items-center flex-col">
      {events.map((event, index) => {
        return <Event key={index} eventData={event} />;
      })}
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch(urlEvents);

  const dataJson: eventDataInterface[] = await response.json();
  return {
    props: {
      data: dataJson,
    },
  };
}
export default HomePage;
