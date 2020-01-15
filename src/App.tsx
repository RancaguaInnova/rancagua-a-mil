import React, { lazy, Suspense } from "react"
import { Header, Grid, GridRow } from "semantic-ui-react"
import "./App.css"
import plays from "./plays"
import ReactGA from "react-ga"

const HeaderBanner = lazy(() => import("./components/Header"))
const Intro = lazy(() => import("./components/Intro"))
const Event = lazy(() => import("./components/Event"))
const Tickets = lazy(() => import("./components/Tickets"))
const Footer = lazy(() => import("./components/Footer"))

ReactGA.initialize("UA-133228609-6")

const events = plays.map(play => {
  return <Event {...play} />
})

const App: React.FC = () => {
  ReactGA.pageview("/")
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Grid columns="1" className="App">
        <GridRow>
          <HeaderBanner />
          <Intro />
          <Header className="plays top-bot-padding">LAS OBRAS</Header>
          {events}
          {/* <Tickets /> */}
          <Footer />
        </GridRow>
      </Grid>
    </Suspense>
  )
}

export default App
