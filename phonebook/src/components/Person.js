import React from "react"

const Person = (props) => {
    return(
      <ul>
      {props.list.map((person) => {
        return <li key={person.name}>{person.name} {person.number}</li>
      })}
    </ul>
    )
  }

export default Person