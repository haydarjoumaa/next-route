import { Event } from "@/Component/EventFolder/Event";
import { DUMMY_EVENTS } from "@/utiles/utils";

const HomePage = () => {
  const events = DUMMY_EVENTS;
  return (
    <div className="flex mt-20  gap-20 justify-center items-center flex-col">
      {events.map((event, index) => {
        return <Event key={index} eventData={event} />;
      })}
    </div>
  );
};
export default HomePage;
