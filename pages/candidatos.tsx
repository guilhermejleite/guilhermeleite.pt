import { Header, Candidato } from '../components'

export default function Home() {
  return <>
    <Header />
    <div className="container">
      <main className="main">
      <br />
      <br />
      <img className="img" src="/candidatos1.png" />
      <img className="img" src="/candidatos2.png" />
      <br />
      <br />
      <a href="/">
        &larr; Voltar
      </a>
      <br />
      <br />
      </main>
    </div>
  </>
}
