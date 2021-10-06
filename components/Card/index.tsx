import { FC } from "react"

export interface ICardProps {
  intro: string
  title: string
  description: string
  link: string
}

export const Card: FC<ICardProps> = ({ intro, title, description, link }) => {
  return (
    <a href={link} className="Card">
      <p className="intro">{intro}</p>
      <h2 className="title">{title} &rarr;</h2>
      <p className="description">{description}</p>
    </a>
  )
}