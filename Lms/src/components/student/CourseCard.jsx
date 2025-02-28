import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  return (
    <div className="border p-4 rounded-md shadow-md">
      {/* Course Thumbnail */}
      <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-40 object-cover rounded-md" />

      {/* Course Details */}
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-600">{course.educator.name}</p>

        {/* Ratings Section */}
        <div className="flex items-center gap-2 mt-1">
          <p>4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="Star" className="w-4 h-4" />
            ))}
          </div>
          <p>(22 Reviews)</p>
        </div>

        <p className="text-red-500 font-bold mt-2">
          {currency} {course.coursePrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
