import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="Header">
      <div className="Header-container">
        <img className="Header-guilhermeleite" src="/guilhermeleite.png" />
        <div className="Header-logo">
          <img src="/logo.png" />
          <p className="Header-slogan">Juntos Pelos Sintrenses</p>
        </div>
      </div>
      <div className="Header-subcontainer">
        <div className="Header-container">
          <p className="Header-label">
            Guilherme Leite
          </p>
        </div>
      </div>
    </header>
  )
}