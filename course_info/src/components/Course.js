import React from 'react'

const Header = (props) => {
    return(
        <h2>{props.name}</h2>
    )
}
  
const Content = (props) => {
    return(
        <>
        {props.parts.map((part) => {
            return <Part key={part.id} part={part.name} exercises={part.exercises} />
        })}
        </>
    )
}

const Part = (props) => {
    return(
        <p>{props.part} {props.exercises}</p>
    )
}

const Total = (props) => {
    let totalExercises = props.parts.reduce((sum, exercise) => {
        return sum + exercise.exercises
    }, 0)

    return(
        <p>Number of exercises is {totalExercises}</p>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} /> 
        </div>
        )
}

export default Course


  