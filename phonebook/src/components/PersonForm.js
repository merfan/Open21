import React from 'react'

const PersonForm = (props) => {
    return(
      <>
        <form onSubmit={props.submit}>
          <div>
            name: <input value={props.values[0]} onChange={props.change[0]}/>
          </div>
          <div>
            number: <input value={props.values[1]} onChange={props.change[1]} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  }

export default PersonForm