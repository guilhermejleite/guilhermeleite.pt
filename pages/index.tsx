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
          <Card
            title="Videos"
            description="Ajude a partilhar os vídeos desta lista"
            link="https://www.youtube.com/playlist?list=PLFM2rShlvK9gD-GJt1ZXM2NLVL-wTX2rp"
          />
          <Card
            title="Mediakit"
            description="Este material é para os nossos apoiantes partilharem"
            link="/mediakit.pdf"
          />
        </Grid>
        <br />
        <br />
      </main>
    </div>
  </>
}
