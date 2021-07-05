import { Header, Candidato } from '../components'

export default function Home() {
  return <>
    <Header />
    <div className="container">
      <main className="main">
      <br />
      <br />
      <br />
      <Candidato name="Guilherme Leite" description="Autor, actor, Produtor de televisão na reforma e Empresário ainda no activo." />
      <Candidato name="Carlos Saldanha" description="Licenciado em Comunicação Social. Produtor e organizador de eventos culturais e desportivos." />
      <Candidato name="Elsa Freire" description="Gestora e Empresária" />
      <Candidato name="Victor Conceição" description="Empresário e dirigente associativo." />
      <Candidato name="Sónia Réquio" description="Bancária" />
      <Candidato name="Paulo Rodrigues" description="Área administrativa no Ensino Superior." />
      <Candidato name="Elsa Morgado" description="Área administrativa no Ensino secundário." />
      <Candidato name="Raúl Tomé" description="Sociólogo. Mestrado em relações laborais." />
      <Candidato name="Nuno Augusto" description="Técnico superior de Farmácia." />
      <Candidato name="Diana Silva" description="Enfermeira de cuidados intensivos." />
      <Candidato name="Idília Silva" description="Professora" />
      <Candidato name="Hugo Carinhas" description="Empresário" />
      <Candidato name="Márcia Daniel" description="Interprete de Língua Gestual" />
      <Candidato name="Patrícia Ferreira" description="Assistente administrativa" />
      <Candidato name="Carla Pina" description="Economista" />
      <Candidato name="Carina Furtado (Alexa)" description="Empregada de Comercio." />
      <br />
      <br />
      <p>9 senhoras e 7 homens. Cumprimos a lei ao contrário do que é normal. </p>
      <br />
      <br />
      </main>
    </div>
  </>
}
