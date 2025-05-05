import React, { useRef, useState, useEffect } from 'react';
import projectsData from '../../PortfolioData/project.json';
import {
  CarouselContainer,
  CarouselTrack,
  NavButton,
  SectionTitle,
  DotsIndicator,
  Dot,
  MobileHint,
  EdgeFade,
} from './styled';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';

type CarouselData = {
  FrontEnd: Project[];
  BackEnd: Project[];
  Mobile: Project[];
};

type CarouselProps = {
  role: keyof CarouselData;
};

export default function Carousel({ role }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState({
    left: false,
    right: true,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = (projectsData as CarouselData)[role];

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const newIndex = Math.round(
        (scrollLeft / (scrollWidth - clientWidth)) * (projects.length - 1),
      );
      setCurrentIndex(newIndex);

      setShowButtons({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1,
      });
    }
  };

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    currentCarousel?.addEventListener('scroll', handleScroll);

    handleScroll();

    window.addEventListener('resize', handleScroll);

    return () => {
      currentCarousel?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [projects]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <SectionTitle>{role}</SectionTitle>
      <CarouselContainer>
        {showButtons.left && (
          <NavButton
            onClick={() => scroll('left')}
            aria-label="Voltar projetos"
            className="nav-button left"
          >
            ‹
          </NavButton>
        )}

        <CarouselTrack ref={carouselRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CarouselTrack>

        {showButtons.right && (
          <NavButton
            onClick={() => scroll('right')}
            aria-label="Avançar projetos"
            className="nav-button right"
          >
            ›
          </NavButton>
        )}

        <EdgeFade className="left" />
        <EdgeFade className="right" />
      </CarouselContainer>

      <DotsIndicator>
        {projects.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </DotsIndicator>

      {projects.length > 1 ? (
        <MobileHint>Arraste para os lados para ver mais projetos</MobileHint>
      ) : (
        <></>
      )}
    </div>
  );
}
