import React from "react";
import { useParams } from "react-router-dom";

const Courses_Detail = () => {
  const Params = useParams();
  console.log(Params);
  return (
    <div>
      <h1> {Params.coursesId} Courses Detail Page</h1>
    </div>
  );
};

export default Courses_Detail;
