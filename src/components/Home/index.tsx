import React from 'react';
import { Main, Technologies, Section, Qualifications } from './styled';
export function Home() {
  return (
    <Main>
      <h1>Informações Gerais</h1>
      <Section>
        <h1>Giovanni Henrique de Paula Fernandes</h1>
        <section>
          <h2>Sobre mim:</h2>
          <p>
            Sou desenvolvedor web com paixão por tecnologia e constante
            aprendizado. Tenho entusiasmo em transformar ideias em soluções
            digitais eficientes, sempre buscando me atualizar com as melhores
            práticas e ferramentas do mercado. Comprometido com a qualidade,
            colaboração em equipe e evolução contínua, acredito que a tecnologia
            tem o poder de impactar positivamente a vida das pessoas.
          </p>
        </section>
        <section>
          <h2>Qualificações:</h2>
          <Qualifications>
            <li>
              <a
                href="https://certificados.descomplica.com.br/graduacao/3d792506057203e90998b1e949031f5573afd961a8e9e2aa1f740482fa3d0ee5"
                target="+blank"
              >
                Desenvolvimento Frontend
              </a>
            </li>
            <li>
              <a
                href="https://certificados.descomplica.com.br/graduacao/da2fcebf9543f5eee66145cd48cfc2ee0fab4799dc1dda3861c4a6c169cf00fd"
                target="+blank"
              >
                Requisitos de Software
              </a>
            </li>
            <li>
              <a
                href="https://certificados.descomplica.com.br/graduacao/671b52ad419e677f76dea8eee219adc7453066f81ddc64b8b6cae2fffe63828b"
                target="+blank"
              >
                Linguagens de Programação
              </a>
            </li>

            <li>
              <a
                href="https://certificados.descomplica.com.br/graduacao/e44c6b121e9b412e821469793eeb2e09190c5d67c6d0d098ab012314913225f4"
                target="+blank"
              >
                Estruturas de Dados
              </a>
            </li>
            <li>
              <a
                href="https://certificados.descomplica.com.br/graduacao/64d22cd197c6abbf4f3095ee9245b03a6dd1a870b6403435043de49b98767a50"
                target="+blank"
              >
                Programação Orientada a Objetos
              </a>
            </li>
          </Qualifications>
        </section>
        <section>
          <h2>Tecnologias que mais uso:</h2>
          <Technologies>
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
          </Technologies>
        </section>
      </Section>
    </Main>
  );
}
