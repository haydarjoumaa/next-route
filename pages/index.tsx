import { Event } from "@/Component/Event";
import { DUMMY_EVENTS } from "@/utiles/utils";

const HomePage = () => {
  const events = DUMMY_EVENTS;
  return (
    <div className="flex mt-40 gap-20 justify-center items-center flex-col">
      {events.map((event) => {
        return <Event eventData={event} />;
      })}
    </div>
  );
};
export default HomePage;
