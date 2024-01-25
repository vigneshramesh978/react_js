import React from "react"
export const Header = ({title}) => {
  return (
    <header >{title}</header>
  )

}

Header.defaultProps = {
  title: "Default Title"
}  