import React from "react"
import { Grid, GridColumn, Image, GridRow } from "semantic-ui-react"

const Footer = () => (
  <Grid columns={1} stackable centered>
    <GridRow>
      <Grid columns={3} stackable centered>
        <GridColumn />
        <GridColumn style={{ borderTop: "2px solid #f26722" }} />
        <GridColumn />
      </Grid>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Image centered src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer.jpg`} />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default Footer
