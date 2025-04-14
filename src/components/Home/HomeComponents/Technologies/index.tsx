import React from 'react';
import { TechnologiesSt } from './styled';

export function Technologies() {
  return (
    <section>
      <h2>Tecnologias que mais uso:</h2>
      <TechnologiesSt>
        <li>
          <img
            src="https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D111"
            alt="JavaScript Icon"
          />
        </li>

        <li>
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            alt="typescript icon"
          />
        </li>

        <li>
          <img
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React Icon"
          />
        </li>

        <li>
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML5 icon"
          />
        </li>

        <li>
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="css3 icon"
          />
        </li>

        <li>
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="Github Icon"
          />
        </li>
      </TechnologiesSt>
    </section>
  );
}
