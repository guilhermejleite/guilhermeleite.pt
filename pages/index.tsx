import { Grid, Card, Header, LatestTweet } from '../components'

export default function Home() {
  return <>
    <Header />
    <div className="container">
      <main className="main">
        <LatestTweet />
        <Grid>
          <Card
            title="Candidatos"
            description="Estamos a organizar uma lista plural de sintrenses"
            link="/brevemente"
          />
          <Card
            title="Objectivos"
            description="Devolver Sintra aos sintrenses. Viver em comunidade."
            link="/brevemente"
          />
          <Card
            title="Videos"
            description="Ajude a partilhar os vídeos desta lista"
            link="http://youtube.com/channel/UCkkNu3MIQI9f8IzGTioWyNw/videos"
          />
          <Card
            title="Comunicados"
            description="Ajude a partilhar a nossa comunicação"
            link="/brevemente"
          />
          <Card
            title="Agenda"
            description="Participe nos nossos eventos online"
            link="/brevemente"
          />
          <Card
            title="Mediakit"
            description="Este material é para os nossos apoiantes partilharem"
            link="/brevemente"
          />
        </Grid>
        <br />
        <br />
      </main>
    </div>
  </>
}
