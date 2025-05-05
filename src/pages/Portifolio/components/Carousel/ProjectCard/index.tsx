import React, { useEffect, useState } from 'react';
import {
  Card,
  Image,
  Content,
  Title,
  Description,
  TechList,
  TechItem,
  Link,
  ExpandedContent,
  ExpandButton,
  CloseButton,
} from './styled';
import { Project } from '../../../types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Card $isExpanded={isExpanded}>
        <Image src={project.image} alt={project.title} onClick={toggleExpand} />

        <Content>
          <Title>{project.title}</Title>

          <Description $isExpanded={isExpanded}>
            {project.description}
          </Description>

          <TechList>
            {project.technologies.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
          </TechList>

          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </Link>

          <ExpandButton onClick={toggleExpand}>
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </ExpandButton>
        </Content>
      </Card>

      {isExpanded && (
        <ExpandedContent
          onClick={(e) => e.target === e.currentTarget && toggleExpand()}
        >
          <div className="expanded-inner">
            <img
              src={project.image}
              alt={project.title}
              className="expanded-image"
            />
            <div className="expanded-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="expanded-link"
              >
                Acessar Projeto
              </Link>
              <CloseButton onClick={toggleExpand}>&times;</CloseButton>
            </div>
          </div>
        </ExpandedContent>
      )}
    </>
  );
}
