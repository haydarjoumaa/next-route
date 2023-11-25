import AllEvents from "@/Component/EventFolder/AllEvents";
import EventFilter from "@/Component/EventFolder/EventFilter";
import { useRouter } from "next/router";

const Events = () => {
  const router = useRouter();
  const sumbitFilter = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
    return;
  };
  return (
    <div className="flex mt-40 flex-col items-center">
      <EventFilter filterHandler={sumbitFilter} />
      <AllEvents />
    </div>
  );
};
export default Events;
