// import React from 'react'
// import { Link } from 'react-router-dom'
// import { AppContext } from '../../context/AppContext'
// import CourseCard from './CourseCard'

// const CoursesSection = () => {
//   const {allCourses}=useContext(AppContext)
//   return (
//     <div className='flex justify-center items-center flex-col mt-12 gap-3 py-3'>
// <h2 className='text-2xl font-bold'>Learn from the best</h2>      
// <p className='max-w-xl text-sm text-center'>Discover our top-rated courses across various categories. From coding and design to business and
//    wellness, our courses are crafted to deliver results.</p>
//    <div>{allCourses.slice(0,4).map((course,index)=><courseCard key={index} course={course}/>)}</div>
//    <Link
//    to={'/course-list'}
//    onClick={()=>scrollTo(0,0)}  
//    className='border border-gray-500 px-3 py-2'>

//    Show all courses
//    </Link>
//     </div>
//   )
// }

// export default CoursesSection
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';  // Capitalized component name

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className='flex justify-center items-center flex-col mt-12 gap-3 py-3'>
      <h2 className='text-2xl font-bold'>Learn from the best</h2>      
      <p className='max-w-xl text-sm text-center'>
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='border border-gray-500 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200'
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
