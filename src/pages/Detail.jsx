import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import CategoryCard from "../components/CategoryCard";

const Detail = () => {
    const {
        appState: { selectedCountry },
      } = useContext(DataContext);
    return (
        <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-50">
          Top Countries in {selectedCountry?.name} for your next holiday.
        </h2>
        <div className="flex flex-row space-x-8 my-12">
            {
              selectedCountry.destinations && selectedCountry.destinations.length>0 && selectedCountry.destinations.map(ele=><CategoryCard data={ele} dataKey={"selectedDestination"} redirectPath={'/list'} key={ele.id}/>)
            }
        </div>
      </div>
    );
};

export default Detail;