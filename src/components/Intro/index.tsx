import React from "react"
import { GridColumn, Image, Header, Container } from "semantic-ui-react"

const Intro = () => {
  return (
    <GridColumn className="Main-Content">
      <Image
        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/rgua-a-mil-logo.png`}
        alt="Rancagua a Mil logo"
        centered
        className="top-bot-padding"
      />
      <Header className="heading" textAlign="center">
        NACE RANCAGUA A MIL
      </Header>
      <Container className="top-bot-padding">
        <p>
          El Festival de Teatro a Mil en su séptima versión será para nuestra ciudad la producción
          más importante de todos los años, porque desde esta oportunidad se llamará Rancagua a Mil,
          consolidando a la capital regional como epicentro cultural del verano.
        </p>
        <p>
          El evento teatral más importante del país se tomará la ciudad en el mes de enero con 2
          obras del ámbito internacional de increíble producción y un gran montaje nacional con
          reconocidos actores.
        </p>
        <p>
          Del 3 al 19 de enero los rancagüinos podrán asistir y asombrarse con la presentación de
          estas obras de gran factura y éxito seguro de audiencia por la calidad del espectáculo.
        </p>
        <p>
          “Tragicomedia del Ande” será la primera obra en presentarse el 12 de enero en la Medialuna
          Monumental. El día 15, en el Teatro Regional Lucho Gatica, será el turno de espectáculo
          estadounidense “Frankenstein”. Y el próximo 19 de enero, Rancagua a Mil finaliza con “El
          Jardín de los Ángeles”, montaje callejero sin precedentes, a cargo de una de las compañías
          europeas más relevantes del momento. Todas las obras desde las 19:30 horas.
        </p>
      </Container>
    </GridColumn>
  )
}

export default Intro
