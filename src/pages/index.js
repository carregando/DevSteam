import Head from 'next/head'

import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipografy/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/SaleCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div>
            <SaleCard />
          </div>
          <div>
            <Subtitle>Outros Jogos</Subtitle>
          </div>
        </Container>
      </div>
    </>
  )
}
