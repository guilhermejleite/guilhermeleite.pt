import { FC } from "react"

export interface ICandidatoProps {
  name: string
  description: string
}

export const Candidato: FC<ICandidatoProps> = ({ name, description }) => {
  return (
    <div className="Candidato">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}