import List from "./List"
import Country from "./Country"

const Countries = (props) => {
  return(
    <>
    {props.list.length > 1 ? <List list={props.list} /> : <Country detail={props.list} />}
    </>
  )
}

export default Countries;