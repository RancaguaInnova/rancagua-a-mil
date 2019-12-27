import React, { Suspense, lazy } from "react"
import { Container, GridColumn, Header, Image, Grid, GridRow, Embed } from "semantic-ui-react"

const PhotoGallery = lazy(() => import("../Gallery"))

const Event = (props: {
  imageUrl: string
  title: string
  downText: string
  description: string[]
  videoId: string
  videoProvider: string
  videoPlaceholder: string
  photos?: any
}) => (
  <GridColumn style={{ marginBottom: "8vmin" }}>
    <Header className="heading">{props.title}</Header>
    <Header className="heading" sub style={{ marginTop: 0 }}>
      {props.downText}
    </Header>
    <Image
      src={`${process.env.REACT_APP_PUBLIC_URL}/${props.imageUrl}`}
      alt={props.title}
      centered
      className="top-bot-padding"
    />
    <Container className="description-container">
      {props.description.map(desc => (
        <p>{desc}</p>
      ))}
      <Grid columns={2} stackable centered>
        <GridRow style={{ margin: "5vmin 0" }} centered>
          {props.videoId ? (
            <GridColumn>
              <Header style={{ textAlign: "center", color: "#f26722", fontSize: "8vmin" }}>
                Trailer:
              </Header>
              <Embed
                id={props.videoId}
                source={props.videoProvider === "youtube" ? "youtube" : "vimeo"}
                placeholder={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/${props.videoPlaceholder}`}
              />
            </GridColumn>
          ) : null}
          <GridColumn>
            <Suspense fallback={<div>Cargando Galería...</div>}>
              <PhotoGallery photos={props.photos} />
            </Suspense>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  </GridColumn>
)

export default Event
