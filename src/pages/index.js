import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipografy/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/SaleCard'
import GameCard from '@/components/cards/gamecard/GameCard'

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
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div className={styles.salecontainer}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div>
              <GameCard/>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
