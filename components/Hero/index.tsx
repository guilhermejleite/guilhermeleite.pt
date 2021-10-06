import { FC } from "react"

export const Hero: FC = () => {
  return (
    <a href="https://www.chiadobooks.com/livraria/o-grande-amor-da-minha-morte" className="Hero">
      <div className="Hero--body">
        <h2>NOVAMENTE Á VENDA</h2> 
        <p>Compre pela Internet para qualquer país.</p>
      </div>
      <img className="Hero--background" src="/hero.jpg" />
    </a>
  )
}