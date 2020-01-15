import React from "react"
import { Header, Image, Grid, GridColumn } from "semantic-ui-react"
import ReactGA from "react-ga"

const Tickets = () => (
  <GridColumn style={{ marginBottom: "10vmin" }}>
    <Header className="plays">ENTREGA DE INVITACIONES</Header>
    <Grid columns={2} centered stackable container className="left-padded">
      {/* <GridColumn>
        <Header as="h2" className="no-margin">
          Homenaje a los 45 años de la Compañía de Teatro Tiara
        </Header>
        <Header as="h2" className="no-margin">
          3 de enero / 20:00 horas / Teatro Regional Lucho Gatica
        </Header>
        <p className="small">
          Entrega de invitaciones:
          <br />
          Desde el 30 de diciembre en el frontis de la Municipalidad
          <br />
          Plaza de Los Héroes 445
        </p>
      </GridColumn> */}
      <GridColumn>
        <Header as="h2" className="no-margin">
          Obra: Tragicomedia del Ande
        </Header>
        <Header as="h2" className="no-margin">
          12 de enero / 17:30 horas / Medialuna Monumental
        </Header>
        <p className="small">
          Entrega de invitaciones:
          <br />
          6 de enero de 12 a 17:30 en el frontis de la Municipalidad
          <br />
          Plaza de Los Héroes 445
        </p>
      </GridColumn>
      {/* <GridColumn>
        <Header as="h2" className="no-margin">
          Obra: Frankenstein
        </Header>
        <Header as="h2" className="no-margin">
          15 de enero / 19:30 horas / Teatro Regional Lucho Gatica
        </Header>
        <p className="small">
          Entrega de invitaciones:
          <br />
          9 de enero de 12 a 17:30 en el frontis de la Municipalidad
          <br />
          Plaza de Los Héroes 445
        </p>
      </GridColumn> */}
      <GridColumn className="left-padded">
        <Header as="h1" style={{ color: "#f26722", textAlign: "center" }}>
          Tickets Electrónicos:
        </Header>
        <div
          onClick={() => {
            ReactGA.event({ category: "tickets", action: "getTickets" })
            window.open("https://webviews.smartrancagua.com/auth/login", "_blank")
          }}
        >
          <Image
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/tickets.png`}
            alt="Tickets"
            verticalAlign="top"
            style={{ maxWidth: "90%", paddingLeft: "13vmin", marginTop: "-3vmin" }}
          />
        </div>
      </GridColumn>
    </Grid>
  </GridColumn>
)

export default Tickets
