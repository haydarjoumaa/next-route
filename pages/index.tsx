import { Card } from "@/Component/UI/Card";
import { Event } from "../Component/Event";
import { featureEvents } from "../utiles/utils";

const HomePage = () => {
  return (
    <>
      <div className="flex mt-10 gap-20 justify-center items-center flex-col">
        {featureEvents().map((event) => {
          return <Event eventData={event} key={event.id} />;
        })}
      </div>
    </>
  );
};
export default HomePage;
