import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 0;
  overflow: hidden;
`;

export const CarouselTrack = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 0;
  gap: 2rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    scroll-snap-type: x proximity;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.primaryColor};
  color: ${colors.tertiaryColor};
  border: none;
  width: 40px;
  height: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 0.9;

  &:hover {
    background: ${colors.secondaryColor};
    opacity: 1;
    transform: translateY(-50%) scale(1.05);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  color: ${colors.primaryColor};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: ${colors.secondaryColor};
    margin: 1rem auto 0;
  }
`;

export const DotsIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 1rem 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? colors.primaryColor : colors.secondaryColor};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  transition: all 0.3s ease;
`;

export const MobileHint = styled.div`
  text-align: center;
  color: ${colors.primaryColor};
  font-size: 0.9rem;
  padding: 1rem 0;
  opacity: 0.7;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const EdgeFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  pointer-events: none;

  @media (min-width: 769px) {
    display: none;
  }

  &.left {
    left: 0;
    background: linear-gradient(
      to right,
      ${colors.mainBgColor} 0%,
      transparent 100%
    );
  }

  &.right {
    right: 0;
    background: linear-gradient(
      to left,
      ${colors.mainBgColor} 0%,
      transparent 100%
    );
  }
`;
