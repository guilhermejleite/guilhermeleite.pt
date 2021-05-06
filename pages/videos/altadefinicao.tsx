import Head from 'next/head'
import { Header, Title } from '../../components'

export default function AltaDefinicao() {
  const title = 'Quem é Guilherme Leite? O mais importante está nesta entrevista'
  const videoUrl = 'https://streamtape.com/get_video?id=gjgbzpYD0ehqqDK&expires=1620378499&ip=DxIsDRqQKxSHDN&token=wTsIyXNyrFMx&stream=1'
  const thumbnailUrl = 'https://thumb.tapecontent.net/thumb/gjgbzpYD0ehqqDK/7Bd34q160PF4JB.jpg'
  return <>
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={thumbnailUrl} />
      <meta name="twitter:card" content={title} />
    </Head>
    <Header />
    <div className="container">
      <Title>
        {title}
      </Title>
      <div className="ratio">
        <video autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <br />
      <br />
      <a href="/">
        &larr; Voltar
      </a>
      <br />
      <br />
    </div>
  </>
}