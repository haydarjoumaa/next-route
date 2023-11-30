import { Event } from "@/Component/EventFolder/Event";
import { eventDataInterface } from "@/interace";
import { filterDataByData, urlEvents } from "@/utiles/utils";
import { useRouter } from "next/router";

const FilterResult = ({
  error,
  filterEvents,
}: {
  error?: boolean;
  filterEvents?: eventDataInterface[];
}) => {
  const router = useRouter();
  if (!router.query.slug) {
    return <p className="center mt-[70px]">Loading</p>;
  }
  const filterMonth = +router.query.slug[1];
  const filterYear = +router.query.slug[0];

  if (isNaN(filterYear) || isNaN(filterMonth)) {
    return <p className="mt-[70px]">error with your route :)</p>;
  }

  if (error) {
    return <p className="mt-[70px]">No Data was found :(</p>;
  }
  if (!filterEvents) return <p className="mt-20">...Loading</p>;

  return (
    <div className="flex mt-20 gap-20 w-full flex-col items-center">
      {filterEvents.map((event, index) => {
        return <Event key={index} eventData={event} />;
      })}
    </div>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: { slug: number[] };
}) => {
  const response = await fetch(urlEvents);

  const dataJson: eventDataInterface[] = await response.json();

  const filterEvents = filterDataByData(
    dataJson,
    params.slug[1],
    params.slug[0]
  );

  if (!filterEvents.length) {
    return {
      props: { error: true },
    };
  }

  return {
    props: { filterEvents },
  };
};

export default FilterResult;
