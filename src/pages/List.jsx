import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
const List = () => {
  const {
    appState: { selectedDestination },
  } = useContext(DataContext);
  //   description
  // id
  // image
  // location
  // name
  // openingHours
  // ratings
  // reviews
  // ticketPrice
  // website
  return (
    <div>
      <h1 className="text-gray-50 my-12 text-4xl font-bold text-center">
        {selectedDestination.name}
      </h1>
      <div className="grid gap-8 grid-cols-2">
        <img src={selectedDestination.image} alt={selectedDestination.name} />
        <div className="text-left space-y-2">
            <p className="text-gray-50"><span className="text-indigo-500 font-bold">Description:</span>{selectedDestination.description} </p>

            <p className="text-gray-50"><span className="text-indigo-500 font-bold">Ratings:</span>{selectedDestination.ratings} </p>
            <p className="text-gray-50"><span className="text-indigo-500 font-bold">Reviews:</span>{selectedDestination.reviews} </p>
            <p className="text-gray-50"><span className="text-indigo-500 font-bold">Location:</span>{selectedDestination.location} </p>
            <p className="text-gray-50"><span className="text-indigo-500 font-bold">Opening Hours:</span>{selectedDestination.openingHours} </p>
           <a href={selectedDestination.website} target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default List;
