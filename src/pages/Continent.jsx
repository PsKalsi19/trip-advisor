import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import CategoryCard from "../components/CategoryCard";

const Continent = () => {
  const { appState:{appData:{continents}} } = useContext(DataContext);
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-50">
        Welcome to Trip Advisor
      </h2>
      <h3 className="text-xl font-bold text-indigo-600">
        Top Continents for your next holiday
      </h3>
      <div className="flex flex-row space-x-8 my-12">
          {
            continents && continents.length>0 && continents.map(ele=><CategoryCard data={ele} dataKey={"selectedContinent"} redirectPath={'/country'} key={ele.id}/>)
          }
      </div>
    </div>
  );
};

export default Continent;
