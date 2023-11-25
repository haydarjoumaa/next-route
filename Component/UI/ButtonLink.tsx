import Link from "next/link";
import ArrowRightIcon from "../Icons/ArrowRight";

const ButtonLink = ({ link }: { link?: string }) => {
  const classStyle =
    "text-base text-white bg-teal-500 border border-teal-500 rounded px-4 py-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-teal-600 active:bg-teal-700 mt-auto self-end mb-5 mr-5";
  if (!link) {
    return <button className={classStyle}>submit</button>;
  }
  return (
    <>
      <Link href={link} className={classStyle}>
        Explore Event <ArrowRightIcon />
      </Link>
    </>
  );
};
export default ButtonLink;
