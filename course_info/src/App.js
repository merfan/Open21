import React from 'react'
import Course from './components/Course'

const App = (props) => {
    return(
        <>
        <h1>Web Development Curriculum</h1>
        <Course course={props.course[0]} />
        <Course course={props.course[1]} />
        </>
    )
}

export default App