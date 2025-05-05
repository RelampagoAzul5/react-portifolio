import styled from 'styled-components';
import * as colors from '../../../../../configs/colors';

export const Card = styled.div<{ $isExpanded: boolean }>`
  background: ${colors.tertiaryColor};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 350px;
  flex-shrink: 0;
  position: relative;
  z-index: ${(props) => (props.$isExpanded ? 100 : 1)};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Title = styled.h3`
  color: ${colors.primaryColor};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p<{ $isExpanded: boolean }>`
  color: ${colors.primaryColor};
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$isExpanded ? 'unset' : '3')};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

export const TechItem = styled.span`
  background: ${colors.secondaryColor};
  color: ${colors.tertiaryColor};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.4rem;
`;

export const Link = styled.a`
  display: inline-block;
  background: ${colors.primaryColor};
  color: ${colors.tertiaryColor};
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondaryColor};
  }
`;

export const ExpandButton = styled.button`
  display: block;
  background: transparent;
  color: ${colors.primaryColor};
  border: 1px solid ${colors.primaryColor};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryColor};
    color: ${colors.tertiaryColor};
  }
`;

export const ExpandedContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Aumente o z-index */
  padding: 2rem;
  overflow-y: auto;

  .expanded-inner {
    background: ${colors.tertiaryColor};
    border-radius: 12px;
    max-width: 95vw;
    width: 100%;
    max-height: 95vh;
    display: flex;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  .expanded-image {
    width: 60%;
    max-height: 95vh;
    object-fit: contain;
    background: #000;
    padding: 2rem;
  }

  .expanded-details {
    width: 40%;
    padding: 3rem;
    overflow-y: auto;
    max-height: 95vh;

    h3 {
      color: ${colors.primaryColor};
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }

    p {
      color: ${colors.primaryColor};
      font-size: 1.8rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;

      span {
        background: ${colors.secondaryColor};
        color: ${colors.tertiaryColor};
        padding: 0.8rem 1.5rem;
        border-radius: 20px;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .expanded-inner {
      flex-direction: column;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
    }

    .expanded-image {
      width: 100%;
      height: auto;
      max-height: 40vh;
      object-fit: contain;
      padding: 1rem;
    }

    .expanded-details {
      width: 100%;
      padding: 2rem;
      max-height: 60vh;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${colors.primaryColor};
  color: ${colors.tertiaryColor};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondaryColor};
    transform: rotate(90deg);
  }
`;
