const EventDetailHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center text-8xl font-bold text-white w-full h-2/6 bg-gradient-to-bl from-teal-500 to-blue-500">
      {title}
    </div>
  );
};
export default EventDetailHeader;
