import React, { useEffect, useState } from "react";
import CoursesCard from "../../Common/CoursesCard/CoursesCard";

const CardLayout = () => {
  const [course, setCourse] = useState([]);

  const getCourse = async () => {
    try {
      const callApi = await CoursesCard();
      setCourse(callApi?.courseFilterDtos || []);
      console.log(callApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);

  console.log(course);

  return (
    <div className="w-9/12 flexbetween flex-wrap">
      {course?.map((value) => (
        <div key={value.courseId} className="w-[300px] h-[350px] mt-10">
          <img
            src={value.tumbImageAddress}
            alt="pic"
            className="w-full h-3/4 rounded-[32px]"
          />
          <span className="text-xl font-semibold h-5 border mt-3">{value.title}</span>
          <div className="flexbetween">
            <span>{value.teacherName}</span>
            <span>{value.cost}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
