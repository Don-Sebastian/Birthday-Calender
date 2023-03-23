import SubCard from "./SubCard";



const Card = ({ day, birthDayDetails }) => {
  return (
    <div className=" col-span-7 mr-5">
      <div className="bg-gray-300 flex justify-center">{day}</div>
      <div className="grid grid-cols-2 min-h-[200px] bg-slate-400">
              {birthDayDetails.map((details, index) => {
                  return <SubCard key={index} details={details} />
              })}
      </div>
    </div>
  );
};

export default Card;
