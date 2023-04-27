import styled from 'styled-components'
import Header from '../components/header/header'
import Title from '../components/title/title'
import Head from 'next/head'
import Tech from '../components/tech/tech'
import Projects from '../components/projects/projects'

const Somethin = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Title />
      <Tech />
      <Projects />
    </>
  )
}
