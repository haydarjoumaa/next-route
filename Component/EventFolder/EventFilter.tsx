import { monthNames } from "@/utiles/utils";
import { Card } from "../UI/Card";
import ButtonLink from "../UI/ButtonLink";
import { FormEvent, useRef } from "react";
import { EventFilterFctInterface } from "@/utiles/interace";

const EventFilter = ({ filterHandler }: EventFilterFctInterface) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const clickHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (yearRef.current?.value && monthRef.current?.value)
      filterHandler(yearRef.current?.value, monthRef.current.value);
  };

  return (
    <Card>
      <form
        className="flex flex-row h-[100px] items-center gap-10 ml-8"
        onSubmit={clickHandler}
      >
        <span>
          <label htmlFor="year" className="mr-2">
            Year
          </label>
          <select
            ref={yearRef}
            id="year"
            className="mb-2 w-[200px] mr-4 p-2 border rounded"
          >
            <option>2021</option>
            <option>2022</option>
          </select>
        </span>

        <span>
          <label htmlFor="month" className="mr-2">
            Month
          </label>
          <select
            id="month"
            ref={monthRef}
            className="mb-2 p-2 w-[200px] border rounded"
          >
            {monthNames.map((month, id) => {
              return (
                <option key={id} value={id}>
                  {month}
                </option>
              );
            })}
          </select>
        </span>
        <div className="ml-auto mr-8">
          <ButtonLink />
        </div>
      </form>
    </Card>
  );
};
export default EventFilter;
