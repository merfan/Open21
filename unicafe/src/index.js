import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / all
  let positivePer = (props.good / all) * 100

  if(props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return(
      <h4>No feedback given</h4>
    )
  }

  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr><Statistic text={"good"} rate={props.good} /></tr>
          <tr><Statistic text={"neutral"} rate={props.neutral} /></tr>
          <tr><Statistic text={"bad"} rate={props.bad} /></tr>
          <tr><Statistic text={"all"} rate={all} /></tr>
          <tr><Statistic text={"average"} rate={average.toPrecision(2)} /></tr>
          <tr><Statistic text={"positive"} rate={positivePer.toPrecision(4)}/><td>%</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return(
    <>
      <td>{props.text}</td><td>{props.rate}</td>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodRating = () => setGood(good + 1);
  const neutualRating = () => setNeutral(neutral + 1);
  const badRating = () => setBad(bad + 1);

  return (
    <>
      <h1>Give feedback</h1>
      <Button eventHandler={goodRating}  text={"good"} />
      <Button eventHandler={neutualRating}  text={"neutral"} />
      <Button eventHandler={badRating}  text={"bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)