import { Event } from "@/Component/Event";
import { featureEvents } from "@/utiles/utils";

const Events = () => {
  return (
    <div className="flex mt-40 gap-20 justify-center items-center flex-col">
      {featureEvents().map((event) => {
        return <Event eventData={event} key={event.id} />;
      })}
    </div>
  );
};
export default Events;
