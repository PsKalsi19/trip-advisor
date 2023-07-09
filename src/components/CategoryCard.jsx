import { MapPinIcon } from "@heroicons/react/24/outline";
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ data, redirectPath, dataKey }) => {
  const { dispatchApp } = useContext(DataContext);
  const { name, image } = data;
  const navigate = useNavigate();
  const handleSelect = () => {
    dispatchApp({
      type: "set_data",
      payload: { key: dataKey, value: data },
    });
    navigate(redirectPath);
  };
  return (
    <button
      className="h-40 w-40 border-2 border-gray-600 shadow-md relative rounded-lg"
      onClick={handleSelect}
    >
      <img src={image} alt={name} className="h-40 rounded-lg w-40" />
      <div className="flex flex-row space-x-2">
          <p className="text-gray-50 flex absolute bottom-0">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-50" />
            {name}
          </p>
      </div>
    </button>
  );
};

export default CategoryCard;
