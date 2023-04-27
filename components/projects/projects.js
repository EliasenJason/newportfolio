import styled from 'styled-components'
import ProjectCard from './card/card'

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
  flex-direction: row;
`

export default function Projects() {
  const Projects = [
    {
      title: 'Pacman',
      description: 'This project was to learn javascript thru a tutorial by Ania Kubow on Scrimba.',
      image: '/pacman.jpg',
      technologies: ['javascript','html','css'],
      demo: 'NEEDS PRODUCTION LINK',
      github: 'NEEDS GITHUB LINK'
    },{
      title: 'Learn Github',
      description: 'This project was created to help my study group on Scrimba use Github for collaboration.',
      image: '/learngithub.jpg',
      technologies: ['html','css'],
      demo: 'https://eliasenjason.github.io/studygroup20/',
      github: ''
    },{
      title: 'Fluid Management',
      description: 'This project was created to learn flexbox and responsive design to different screen sizes',
      image: '/flexbox.jpg',
      technologies: ['html','css'],
      demo: 'https://5dcee8f0fa0eea0198e86593--hungry-yonath-d850d9.netlify.app/',
      github: ''
    }
  ]
  return (
    <>
      <SectionTitle>
        <h3>Projects</h3>
      </SectionTitle>
      <Content>
        {Projects.map(item => <ProjectCard project={(item)}/>)}
      </Content>
    </>
  )
}