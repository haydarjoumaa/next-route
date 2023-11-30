import { foramtedString, readabelDate } from "@/utiles/utils";
import CalendarIcon from "../Icons/CalendarIcon";
import LocationIcon from "../Icons/LocationIcon";
import Image from "next/image";

const EventDetailContent = ({
  img,
  date,
  location,
}: {
  img: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="m-auto w-fit justify-center mt-[-100px] bg-gray-800 flex flex-row p-10 rounded shadow-lg">
      <Image
        src={img}
        alt="image"
        width={400}
        height={400}
        className="rounded-full border-8 border-sky-50 w-[400px] h-[400px] object-cover mr-20 "
      />
      <div className="flex justify-center gap-12 flex-col  text-xl text-teal-200">
        <div className="flex flex-col">
          <CalendarIcon />
          {readabelDate(date)}
        </div>

        <div className="flex flex-col">
          <LocationIcon />
          <span className="break-words"> {foramtedString(location)}</span>
        </div>
      </div>
    </div>
  );
};
export default EventDetailContent;
