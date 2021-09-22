import { Grid, Card, Header, LatestTweet } from '../components'

export default function Home() {
  return <>
    <Header />
    <div className="container">
      <main className="main center">
        <br /><br />
        <p><b>DIGA AQUI</b> tudo o que nos quiser dizer:</p>
        <a style={{marginTop: -10}} href="mailto:nos@guilhermeleite.pt">nos@guilhermeleite.pt</a>
        <LatestTweet />
        <Grid>
          <Card
            title="Candidatos"
            description="Uma lista plural de sintrenses"
            link="/candidatos"
          />
          <Card
            title="Programa"
            description="Devolver Sintra aos sintrenses. Viver em comunidade."
            link="/NOS-Juntos-Pelos-Sintrenses-PGL.pdf"
          />
        </Grid>
        <br />
        <br />
      </main>
    </div>
  </>
}
