import styled from 'styled-components'
import logos from '../../public/techLogos'
import Card from './card'

const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  width: 80%;
  margin: 3em auto;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: .3em; ;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3em;
  padding: 1em 5em;
`

export default function Tech() {
  return (
    <>
      <SectionTitle>
        <h3>My Tech</h3>
      </SectionTitle>
      <Content>
        {logos.map( item => <Card logo={item.svg} name={item.name} key={item.name}/>)}
      </Content>
    </>
  )
}