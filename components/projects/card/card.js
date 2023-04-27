import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 300px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
`;

const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Technology = styled.li`
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #ccc;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} width={500} height={300} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Technologies>
        {project.technologies.map((tech) => (
          <Technology key={tech}>{tech}</Technology>
        ))}
      </Technologies>
      <div>
        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
          Demo
        </Link>
        <Link href={project.github} target="_blank" rel="noopener noreferrer">
          Code
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;