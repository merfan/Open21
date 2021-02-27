import React from 'react'

const Filter = (props) => {
    return(
      <>
      filter shown with: <input onChange={props.eventHandler} />
      </>
    )
  }

export default Filter