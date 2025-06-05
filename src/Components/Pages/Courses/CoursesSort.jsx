import React from "react";

const CoursesSort = () => {
  return (
    <div className="w-2/5 mx-auto h-9 basicflex gap-5 justify-start">
      <span className="text-lg font-semibold">ترتیب</span>
      <button className="h-full w-1/6 rounded-full border border-[#2F2F2F]">
        جدیدترین
      </button>
      <button className="h-full w-1/6 rounded-full border border-[#2F2F2F]">
        محبوب ترین
      </button>
      <button className="h-full w-1/6 rounded-full border border-[#2F2F2F]">
        گران ترین
      </button>
      <button className="h-full w-1/6 rounded-full border border-[#2F2F2F]">
        ارزان ترین
      </button>
    </div>
  );
};

export default CoursesSort;
