import axios from "../../../API/ApiConfig";

export const CoursesCard = async () => {
  try {
    const res = await axios.get(
      "/Home/GetCoursesWithPagination?PageNumber=3&SortingCol=Active&SortType=DESC&TechCount=0",
      {
        headers: {
          "Content-Type": undefined,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default CoursesCard;
