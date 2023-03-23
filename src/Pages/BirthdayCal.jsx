import Card from "../Components/Card";

const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const staticData = [
  {
    name: "don sebsdfsa",
    birthday: "03/24/2023",
  },
  {
    name: "Gince Geo",
    birthday: "02/18/2023",
  },
  {
    name: "Gilksdafhnce Geo",
    birthday: "03/18/2023",
  },
  {
    name: "Ginksfhce Geo",
    birthday: "03/22/2023",
  },
  {
    name: "Gincesdf Geo",
    birthday: "03/24/2023",
    },
    {
        name: "Saju s",
        birthday: "03/24/2014"
  }
];

const inputDate = "2023";
const outputDate = {};

for (const details of staticData) {
  details.birthday = details.birthday.slice(0, 5) + `/${inputDate}`;;
  const date = details.birthday;
  const dateParts = date.split("/");
    const dateObject = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
  const nameOfDay = weekDays[dateObject.getDay()];
  if (nameOfDay !== undefined) {
    if (!outputDate[nameOfDay]) {
      const newArray = [details.name];
      outputDate[nameOfDay] = newArray;
    } else outputDate[nameOfDay].push(details.name);
  }
}

const BirthdayCal = () => {

    return (
      <div className="row grid grid-flow-col px-10 py-5">
        <div className="col-span-2"></div>
          {weekDays.map((day, index) => {
              return <Card key={index} day={day} birthDayDetails={outputDate[day]?outputDate[day]:[]} />;
            })}
        <div className="col-span-3"></div>
      </div>
    );
}

export default BirthdayCal;