import React from "react";
import { useParams } from "react-router-dom";
const DashBoard = ({ match }) => {
  const { name } = useParams();
  return <div>profile:{name}</div>;
};

export default DashBoard;
