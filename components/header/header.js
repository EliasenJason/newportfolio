import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
  height: 10vh;
  display: grid; 
  grid-template-rows: 10vh;
  align-items: center;
  justify-content: center;
  grid-template-areas: 
    ". logo .";
    grid-template-columns: 1fr 1fr 1fr;
`

const Logo = styled.div`
  text-align: left;
  grid-area: logo;
  margin: 0 auto;
  height: 50px;
  padding-top: .5em;
`
const LogoImage = styled.img`
  object-fit: cover;
  height: 100%;
`


export default function Header() {

  return (
    <Container>
      <Logo><LogoImage src="/logo.svg" layout="fill" alt="logo" /></Logo>
    </Container>
  )
}