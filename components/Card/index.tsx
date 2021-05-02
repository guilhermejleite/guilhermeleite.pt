import { FC } from "react"

export interface ICardProps {
  title: string
  description: string
  link: string
}

export const Card: FC<ICardProps> = ({ title, description, link }) => {
  return (
    <a href={link} className="Card">
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  )
}