import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p style={{border:"1px solid red",padding:"5px"}}>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer