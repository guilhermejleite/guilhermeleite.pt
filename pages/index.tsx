import Head from 'next/head'

import { LatestTweet, Grid, Card } from '../components'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Guilherme Leite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <img src="/logo.png" width="240px" height="186px" />
        <p>Juntos pelos Sintrenses</p>
        <LatestTweet />
        <Grid>
          <Card
            title="Campanha dos outros"
            description="Porro labore neque ipsum eius amet."
            link="/brevemente"
          />
          <Card
            title="As suas ideias"
            description="Dolor dolore etincidunt aliquam velit sit."
            link="/brevemente"
          />
          <Card
            title="10 objectivos"
            description="Eius aliquam labore neque porro neque."
            link="/brevemente"
          />
          <Card
            title="Cartazes"
            description="Est quisquam neque etincidunt velit quaerat dolorem."
            link="/brevemente"
          />
          <Card
            title="Comunicados"
            description="Labore est labore ipsum labore modi numquam etincidunt."
            link="/brevemente"
          />
          <Card
            title="Videos"
            description="Labore quiquia est tempora aliquam dolorem sit."
            link="/brevemente"
          />
          <Card
            title="Candidatos"
            description="Sit labore est consectetur quisquam."
            link="/brevemente"
          />
          <Card
            title="Agenda"
            description="Eius labore labore porro labore ut dolorem."
            link="/brevemente"
          />
        </Grid>
        <br />
        <br />
      </main>
    </div>
  )
}
