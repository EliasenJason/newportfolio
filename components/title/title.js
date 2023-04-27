import styled from 'styled-components'
import LeftItem from './section/leftSection'
import RightItem from './section/rightSection'

const LargeContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr ;
  grid-template-areas:
  'center center center center'
  'left left left left'
  'right right right right'
  ;
  @media (min-width: 1200px) {
    grid-template-areas:
    'left center center right'
    ;
  }
`
const CenterContainer = styled.div`
  grid-area: center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Styledh1 = styled.h1`
  margin-top: .75em;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
`
const SmallerText = styled(Styledh1)`
  font-weight: 400;
  font-size: 2rem;
`
const PortraitContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Portrait = styled.img`
  margin: 2em;
  width: 70%;
  border-top-left-radius: 100% 50%;
  border-top-right-radius: 100% 50%;
  border-bottom-left-radius: 100% 50%;
  border-bottom-right-radius: 100% 50%;
  box-shadow: 
    0 0 0 20px white,
    0 0 0 22px black,
    5px 5px 10px 25px grey;
`
const SideContainerLeft = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
`
const SideContainerRight = styled(SideContainerLeft)`
  grid-area: right;
`

export default function Title() {
  return (
    <>
      <Styledh1>Jason Eliasen</Styledh1>
      <SmallerText>Developer & Designer</SmallerText>
      <LargeContainer>
        <CenterContainer>
          <PortraitContainer><Portrait src="/portrait.jpg" /></PortraitContainer>
        </CenterContainer>
        <SideContainerLeft>
          <LeftItem title="biography" text="I enjoy building modern websites and I am based in Grande Prairie AB." />
          <LeftItem title="contact" text={`eliasen_jason@gmail.com\n+780 223 4031`} />
          <LeftItem title="services" text={`Design it\nBuild it\nMaintain it`} />
        </SideContainerLeft>
        <SideContainerRight>
          <RightItem title="full stack development" text="Built with the MERN stack" />
          <RightItem title="UI/UX Design" text="Good looking with a good experience" />
          <RightItem title="SEO & growth" text="Comes baked in with NextJS" />
        </SideContainerRight>
      </LargeContainer>
    </>
  )
}