import React from "react";
import Dados from "./Dados";

export default function Corpo() {
  const curso = () => {
    return "Tecnologia em Análise e Desenvolvimento de Sistemas";
  };

  const disciplina = "Desenvolvimento de sistemas WEB";
  const atividade = "Aula09 - prática";

  const somar = (v1, v2) => {
    return v1 + v2;
  };

  return (
    <section>
      <h2>Atividade</h2>
      <p>Aluno: Sidnei Mitani - CV3016447</p>

      <Dados
        curso={curso()}
        disciplina={disciplina}
        atividade={atividade}
        somar={somar}
      ></Dados>
    </section>
  );
}
