import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgrey;
    border-radius: 45px;
    height: 150px;
    aspect-ratio: 1 / 1.4;
  }
  p {
    font-weight: 400;
    font-family: Montserrat;
  }
`

const Card = ({logo, name}) => {
    return (
        <StyledCard>
            <section><div dangerouslySetInnerHTML={{__html: logo}}></div></section>
            <p>{name}</p>
        </StyledCard>
    )
}
export default Card