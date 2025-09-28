import React from 'react'
import SectioninHome  from "./SectionOneinHome.tsx"
import CoursesGrid from './SectionThreeinHome.tsx'
import InstructorBanner from './InstructorBanner.tsx'
import Instructors from './Instructors.tsx'
function Home() {
  return (
    <div >
      <SectioninHome/>
      <CoursesGrid/>
      <InstructorBanner/>
      <Instructors/>

    </div>
  )
}

export default Home
