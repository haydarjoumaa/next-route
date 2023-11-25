import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className=" text-2xl  text-teal-200 font-semibold ">
            HAYDAR Website
          </h1>
        </div>
        <div>
          <Link href="/" className=" hover:underline text-teal-200">
            All Events
          </Link>
          <span className="ml-4">
            {" "}
            <Link href="/events" className=" hover:underline text-teal-200">
              Events
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
