import { Grid, Card, Hero } from '../components'

export default function Home() {
  return <>
    <Hero />
    <div className="container">
      <main className="main center">
        <Grid>
          <Card
            intro="O Grande Amor da Minha Morte"
            title="Comprar livro"
            description="Na página da Editora Chiado pode encomendar para qualquer país"
            link="https://www.chiadobooks.com/livraria/o-grande-amor-da-minha-morte"
          />
        </Grid>
        <br />
        <br />
        <a href="mailto:guilhermeleite@guilhermeleite.pt">guilhermeleite@guilhermeleite.pt</a>
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  </>
}
