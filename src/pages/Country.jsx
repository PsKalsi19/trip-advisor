import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import CategoryCard from "../components/CategoryCard";

const Country = () => {
  const {
    appState: { selectedContinent },
  } = useContext(DataContext);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-50">
        Top Countries in {selectedContinent?.name} for your next holiday.
      </h2>
      <div className="flex flex-row space-x-8 my-12">
          {
            selectedContinent.countries && selectedContinent.countries.length>0 && selectedContinent.countries.map(ele=><CategoryCard data={ele} dataKey={"selectedCountry"} redirectPath={'/detail'} key={ele.id}/>)
          }
      </div>
    </div>
  );
};

export default Country;
