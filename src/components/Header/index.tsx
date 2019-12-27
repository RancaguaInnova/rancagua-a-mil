import React from "react"
import { GridColumn, Image } from "semantic-ui-react"

const Header = () => (
  <GridColumn style={{ boxShadow: "0 2px 2px gray" }}>
    <Image src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/header.jpg`} centered fluid />
  </GridColumn>
)

export default Header
