import React from 'react'
import CoursesTop from './CoursesTop'
import CoursesSort from './CoursesSort'
import CoursesFilter from './CoursesFilter'
import CardLayout from './CardLayout'

const Courses = () => {
  return (
    <div>
        <CoursesTop />
        <CoursesSort />
        <div className='flexaround gap-24 mt-5'>
            <CoursesFilter />
            <CardLayout />
        </div>
    </div>
  )
}

export default Courses