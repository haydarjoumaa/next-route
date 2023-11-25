import { Event } from "@/Component/EventFolder/Event";
import { Card } from "@/Component/UI/Card";
import { filterDataByData } from "@/utiles/utils";
import { useRouter } from "next/router";

const FilterResult = () => {
  const router = useRouter();
  if (!router.query.slug) {
    return <p className="center mt-[70px]">Loading</p>;
  }
  const filterMonth = +router.query.slug[1];
  const filterYear = +router.query.slug[0];

  if (isNaN(filterYear) || isNaN(filterMonth)) {
    return <p className="mt-[70px]">error with your route :)</p>;
  }

  const filterEvents = filterDataByData(filterMonth, filterYear);

  if (!filterEvents.length) {
    return <p className="mt-[70px]">No Data was found :(</p>;
  }
  return (
    <div className="flex mt-20 gap-20 w-full flex-col items-center">
      {filterEvents.map((event, index) => {
        return <Event key={index} eventData={event} />;
      })}
    </div>
  );
};
export default FilterResult;
