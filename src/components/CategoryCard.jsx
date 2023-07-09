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
      <p className="text-gray-50 absolute bottom-0">{name}</p>
    </button>
  );
};

export default CategoryCard;
