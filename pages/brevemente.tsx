import Image from 'next/image'

export default function Brevemente() {
  return (
    <div className="container">
      <Image
        src="/logo.png"
        alt="Nos Cidadaos"
        width={240}
        height={186}
      />
      <p>Juntos pelos Sintrenses</p>
      <br />
      <br />
      <h1>Brevemente</h1>
      <br />
      <br />
      <a href="/">
        &larr; Voltar
      </a>
    </div>
  )
}