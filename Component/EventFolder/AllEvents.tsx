import { featureEvents } from "@/utiles/utils";
import { Event } from "./Event";

const AllEvents = () => {
  return (
    <div className="flex mt-20 gap-20 w-full flex-col items-center">
      {featureEvents().map((event, index) => {
        return <Event eventData={event} key={event.id} />;
      })}
    </div>
  );
};
export default AllEvents;
