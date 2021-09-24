import { FC } from 'react'

export const Intro: FC = () => {
  return (
    <div className="intro">
      <p>Desta vez vá votar, Sintra tem que mudar</p>
      <p className="orange">Nos boletins de voto é o último quadradinho</p>
      <p>Não tem nada que enganar</p>
      <p>O seu voto é importante para mudar Sintra, para dar voz aos Sintrenses</p>
      <img className="img" src="/votar.jpg" />
    </div>
  )
}