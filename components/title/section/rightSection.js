import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  height: 25%;
`
const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: .4em;
  text-transform: uppercase;
`
const Text = styled.section`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: .9rem;
  display: block;
  line-height: 2em;
  word-spacing: .3em;
  color: grey;
  width: 100%;
`

export default function RightItem({title, text}) {
  const newLineText = text.split('\n').map(str => <p key={str}>{str}</p>)
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{newLineText}</Text>
    </Container>
  )
}