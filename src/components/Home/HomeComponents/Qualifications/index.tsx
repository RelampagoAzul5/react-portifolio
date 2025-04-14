import React from 'react';
import { QualificationsSt } from './styled';

export function Qualifications() {
  return (
    <section>
      <h2>Qualificações:</h2>
      <QualificationsSt>
        <li>
          <a
            className="average-name"
            href="https://certificados.descomplica.com.br/graduacao/3d792506057203e90998b1e949031f5573afd961a8e9e2aa1f740482fa3d0ee5"
            target="+blank"
          >
            Desenvolvimento Frontend
          </a>
        </li>
        <li>
          <a
            className="short-name"
            href="https://certificados.descomplica.com.br/graduacao/da2fcebf9543f5eee66145cd48cfc2ee0fab4799dc1dda3861c4a6c169cf00fd"
            target="+blank"
          >
            Requisitos de Software
          </a>
        </li>
        <li>
          <a
            className="average-name"
            href="https://certificados.descomplica.com.br/graduacao/671b52ad419e677f76dea8eee219adc7453066f81ddc64b8b6cae2fffe63828b"
            target="+blank"
          >
            Linguagens de Programação
          </a>
        </li>

        <li>
          <a
            className="short-name"
            href="https://certificados.descomplica.com.br/graduacao/e44c6b121e9b412e821469793eeb2e09190c5d67c6d0d098ab012314913225f4"
            target="+blank"
          >
            Estruturas de Dados
          </a>
        </li>
        <li>
          <a
            className="large-name"
            href="https://certificados.descomplica.com.br/graduacao/64d22cd197c6abbf4f3095ee9245b03a6dd1a870b6403435043de49b98767a50"
            target="+blank"
          >
            Programação Orientada a Objetos
          </a>
        </li>
      </QualificationsSt>
    </section>
  );
}
