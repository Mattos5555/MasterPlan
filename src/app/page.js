"use client";

import { useState } from "react";

export default function Home() {
  const [condominioAberto, setCondominioAberto] = useState(null);

  const mapa = {
    imagem: "/masterplan.jpg",

    condominios: [
      {
        id: 1,
        nome: "Millenio",
        top: "29%",
        left: "68%",

        lazerExterno: [
          "Spa Externo",
          "Raia 25M",
          "Solário",
          "Bar da Piscina",
          "Piscina Adulto com Deck Molhado e Hidro",
          "Piscina Infantil",
          "Deck lounge",
          "Alameda das Fontes",
          "Praça das Jabuticabeiras",
          "Praça do Encontro",
        ],

        edificios: [
          {
            nome: "Sydney",
            metragem: "77m² a 82m²",
            lazerInterno: ["Sala de Massagem", "Spa", "Sala Multiuso", "Fitness"],
          },
          {
            nome: "Singapura",
            metragem: "77m² a 82m²",
            lazerInterno: ["Lobby", "Brinquedoteca", "3 Home Offices", "Bar", "Café"],   
          },
          {
            nome: "Chicago",
            metragem: "77m² a 82m²",
            lazerInterno: ["Salão de Festas", "Estar Coberto", "Salão de Jogos"],
          },
        ],
      },

      {
        id: 2,
        nome: "Astra",
        top: "16%",
        left: "50%",

        lazerExterno: [
          "Piscina Raia",
          "Piscina infantil",
          "Bar da Piscina",
          "Belvederé",
          "Churrasqueira com Forno de Pizza",
          "Playground Kids",
          "PetPlace",],

        edificios: [
          {
            nome: "Luna",
            metragem: "Colunas Double S 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8/ 86,89m² a 93,61m²",
            lazerInterno: ["Sauna a vapor", "Spa", "Sauna Seca","Salas de Massagem","Academia","Sala Aeróbico"],
          },
          {
            nome: "Lyra",
            metragem: "Colunas Double S 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8/ 86,89m² a 93,61m²",
            lazerInterno: ["Bistrô", "Home Tv Externo","Salão De Jogos","Streaming Lounge"],
          },
          {
            nome: "Selene",
            metragem: "Colunas Double S 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8/ 86,89m² a 93,61m²",
            lazerInterno: ["Salão de Festas Adulto", "Wine Bar","Espaço Gourmet","Coworking","Podcast Studio","Sala de Reunião"],
          },
          {
            nome: "Gaia",
            metragem: "Colunas Double S 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8/ 86,89m² a 93,61m²",
            lazerInterno: ["Salão de Festas Infantil", "Brinquedoteca",],
          },
        ],
      },

      {
        id: 3,
        nome: "Saint Michel",
        top: "50%",
        left: "80%",

        lazerExterno: [
          "Tenda de Massagem",
          "Fitness Externo",
          "Estar Adulto",
          "Boulevard",
          "Redário",
          "Pomar",
          "Playground",
          "Praça Tenn",
          "Praça das Crianças",
          "Parque Infantil",
          "Trilha Infantil",
          "Gourmet Externo",
          "Acesso ao Parque",
          "Belvédère",
          "Piscina Infantil",
          "Piscina c/ raia 25cm",
          "Piscina Adulto c/Bar",
          "Deck Molhado",
          "Hidromassagem",
          "PetPlay",
        ],

        edificios: [
          {
            nome: "Ed. Champagne",
            metragem: "3 Quartos: 131m² a 134m² 2 Vagas / Cobertura 4 Quartos 280m² a 283m² 3 Vagas OBS: Coluna 2,3,6 e 7 4Q e Colunas 1,4,5 e 8 3Q + Sala",
            lazerInterno: ["Espaço Festas Teen", "Apoio Festas Teen","Espaço de Estudos","Espaço Games","Garage Band"],
          },
          {
            nome: "Ed. Alsace",
            metragem: "3 Quartos: 131m² a 134m² 2 Vagas / Cobertura 4 Quartos 280m² a 283m² 3 Vagas OBS: Coluna 2,3,6 e 7 4Q e Colunas 1,4,5 e 8 3Q + Sala",
            lazerInterno: ["Espaço Festas Infantil", "Apoio Festas Infantil","Brinquedoteca","Espaço Baby","Cinema"],
          },
          {
            nome: "Ed. Provence",
            metragem: "4 Quartos 160m² 2 e 3 vagas / Cobertura 5 Quartos 325m² 3 vagas",
            lazerInterno: ["Espaço Gourmet", "Espaço Degustação", "Apoio Gourmet", "Espaço Jogos Adulto","Espaço Office",],
          },
          {
            nome: "Ed. Bourgogne",
            metragem: "4 Quartos 160m² 2 e 3 vagas / Cobertura 5 Quartos 325m² 3 vagas",
            lazerInterno: ["Espaço Fitness", "Bar da Piscina","Vestiário Feminino", "Vestiário Masculino", "Banheiro Pne","Espaço Multiuso"],
          },
          {
            nome: "Ed. Bordeaux",
            metragem: "4 Quartos 160m² 2 e 3 vagas / Cobertura 5 Quartos 325m² 3 vagas",
            lazerInterno: ["Repouso Spa", "Hidro","Piscina C/ Nado Contra Corrente","Sauna Seca","Sauna a Vapor","Duchas","Espaço Massagem","Espaço Massagem com Furô","Espaço Beleza", "Sala de Depilação"],
          },
        ],
      },

      {
        id: 4,
        nome: "Viure",
        top: "48%",
        left: "63%",

        lazerExterno: [
          "Alongamento",
          "Piscina Infantil",
          "Piscina adulto com deck molhado",
          "Hidromassagem",
          "Piscina Recreativa",
          "Piscina C/Raia de 25m",
          "Bar da Piscina",
          "SPA Externo",
          "Espaço Gourmet Externo",
          "Lounge",
          "Praça Central",
          "PlayInfantil",
        ],

        edificios: [
          {
            nome: "Ed. Dalí",
            metragem: ["02 QUARTOS (01 suíte) | Col. 02 - 85,46 m² | Col. 03 -85.66 m² | Col. 06 - 85.29 m² | Col. 07 - 84,98 m² | 1vaga",
              " ==== 03 QUARTOS (01 suite) | Col. 04/05 - 110,27m² | Col. 01/08 -115,15m² | 2 vagas ==== COBERTURA (2Q e 3Q)  (01 suite) | Col. 02- 157,04m²-2Q | Col. 03- 157,15m²-2Q | Col. 06- 164,12m²-3Q | Col. 07 - 163,81m²-3Q | 3 vagas ==== *COBERTURA* (4Q) (01 suite) | Col. 01- 250,89m² | Col. 04-241,91m² | Col. 05-238,00m² | Col. 08-247,43m² | 3 vagas"],
            lazerInterno: ["Festas Adulto", "Espaço Gourmet", "Lounge Coberto","Varanda Festas"],
          },
          {
            nome: "Ed. Picasso",
            metragem: ["02 QUARTOS (01 suíte) | Col. 02 - 85,46 m² | Col. 03 -85.66 m² | Col. 06 - 85.29 m² | Col. 07 - 84,98 m² | 1vaga",
              " ==== 03 QUARTOS (01 suite) | Col. 04/05 - 110,27m² | Col. 01/08 -115,15m² | 2 vagas ==== COBERTURA (2Q e 3Q)  (01 suite) | Col. 02- 157,04m²-2Q | Col. 03- 157,15m²-2Q | Col. 06- 164,12m²-3Q | Col. 07 - 163,81m²-3Q | 3 vagas ==== *COBERTURA* (4Q) (01 suite) | Col. 01- 250,89m² | Col. 04-241,91m² | Col. 05-238,00m² | Col. 08-247,43m² | 3 vagas"],
            lazerInterno: ["Espaço Kids Baby","Espaço Kids Jardinagem","Festas Kids","Espaço Kids"],
          },
          {
            nome: "Ed. Miró",
            metragem: ["02 QUARTOS (01 suíte) | Col. 02 - 85,46 m² | Col. 03 -85.66 m² | Col. 06 - 85.29 m² | Col. 07 - 84,98 m² | 1vaga",
              " ==== 03 QUARTOS (01 suite) | Col. 04/05 - 110,27m² | Col. 01/08 -115,15m² | 2 vagas ==== COBERTURA (2Q e 3Q)  (01 suite) | Col. 02- 157,04m²-2Q | Col. 03- 157,15m²-2Q | Col. 06- 164,12m²-3Q | Col. 07 - 163,81m²-3Q | 3 vagas ==== *COBERTURA* (4Q) (01 suite) | Col. 01- 250,89m² | Col. 04-241,91m² | Col. 05-238,00m² | Col. 08-247,43m² | 3 vagas"],
            lazerInterno: ["Espaço Massagem", "Espaço Beleza","Spa","Academia C/Sala Multiuso","Spa Externo","Spinning"],
          },
          {
            nome: "Ed. Gaudí",
            metragem: ["02 QUARTOS (01 suíte) | Col. 02 - 85,46 m² | Col. 03 -85.66 m² | Col. 06 - 85.29 m² | Col. 07 - 84,98 m² | 1vaga",
              " ==== 03 QUARTOS (01 suite) | Col. 04/05 - 110,27m² | Col. 01/08 -115,15m² | 2 vagas ==== COBERTURA (2Q e 3Q)  (01 suite) | Col. 02- 157,04m²-2Q | Col. 03- 157,15m²-2Q | Col. 06- 164,12m²-3Q | Col. 07 - 163,81m²-3Q | 3 vagas ==== *COBERTURA* (4Q) (01 suite) | Col. 01- 250,89m² | Col. 04-241,91m² | Col. 05-238,00m² | Col. 08-247,43m² | 3 vagas"],
            lazerInterno: ["Espaço Jogos","Espaço Office","Festas Teen","Garage Band","Cinema"],
          },
        ],
      },

      {
        id: 5,
        nome: "Elos",
        top: "40%",
        left: "43%",

        lazerExterno: [
          "Piscina panorâmica",
          "Quadra",
          "Área gourmet",
        ],

        edificios: [
          {
            nome: "E1",
            metragem: "78m² a 88m²",
            lazerInterno: ["Spa", "Academia"],
          },
          {
            nome: "E2",
            metragem: "78m² a 88m²",
            lazerInterno: ["Coworking"],
          },
          {
            nome: "E3",
            metragem: "78m² a 88m²",
            lazerInterno: ["Sala massagem"],
          },
          {
            nome: "E4",
            metragem: "78m² a 88m²",
            lazerInterno: ["Spa", "Cinema"],
          },
          {
            nome: "E5",
            metragem: "78m² a 88m²",
            lazerInterno: ["Academia"],
          },
        ],
      },

      {
        id: 6,
        nome: "Pura",
        top: "50%",
        left: "32%",

        lazerExterno: [
          "Piscina natural",
          "Espaço zen",
          "Jardins",
        ],

        edificios: [
          {
            nome: "P1",
            metragem: "90m² a 110m²",
            lazerInterno: ["Spa"],
          },
          {
            nome: "P2",
            metragem: "90m² a 110m²",
            lazerInterno: ["Academia"],
          },
          {
            nome: "P3",
            metragem: "90m² a 110m²",
            lazerInterno: ["Coworking"],
          },
          {
            nome: "P4",
            metragem: "90m² a 110m²",
            lazerInterno: ["Sala multiuso"],
          },
        ],
      },

      {
        id: 7,
        nome: "Ouro",
        top: "80%",
        left: "35%",

        lazerExterno: [
          "Piscina resort",
          "Quadra de tênis",
          "Lounge gourmet",
        ],

        edificios: [
          {
            nome: "O1",
            metragem: "100m² a 130m²",
            lazerInterno: ["Spa", "Academia"],
          },
          {
            nome: "O2",
            metragem: "100m² a 130m²",
            lazerInterno: ["Coworking"],
          },
          {
            nome: "O3",
            metragem: "100m² a 130m²",
            lazerInterno: ["Sala massagem"],
          },
          {
            nome: "O4",
            metragem: "100m² a 130m²",
            lazerInterno: ["Spa"],
          },
          {
            nome: "O5",
            metragem: "100m² a 130m²",
            lazerInterno: ["Academia"],
          },
          {
            nome: "O6",
            metragem: "100m² a 130m²",
            lazerInterno: ["Cinema privativo"],
          },
        ],
      },
    ],
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* MAPA */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/masterplan.png')" }}
/>

      <div className="absolute inset-0 bg-black/40" />

      {/* HEADER */}
      <div className="absolute top-10 left-10 text-white z-20">
        <h1 className="text-5xl font-bold">
          Masterplan Bairro Planejado
        </h1>
        <p className="mt-3">Clique nos condomínios</p>
      </div>

      {/* PONTOS */}
      {mapa.condominios.map((c) => (
        <button
          key={c.id}
          onClick={() => setCondominioAberto(c)}
          className="absolute z-20"
          style={{ top: c.top, left: c.left }}
        >
          <div className="w-20 h-20 rounded-full border-4 border-white bg-white/20 animate-pulse" />
          <div className="mt-2 bg-black/70 text-white px-3 py-2 rounded-xl text-sm">
            {c.nome}
          </div>
        </button>
      ))}

      {/* MODAL PROFISSIONAL */}
      {condominioAberto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl p-6">

            {/* TÍTULO */}
            <h2 className="text-3xl font-bold mb-4">
              {condominioAberto.nome}
            </h2>

            {/* LAZER EXTERNO */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Lazer Externo
              </h3>

              <div className="flex flex-wrap gap-2">
                {condominioAberto.lazerExterno.map((l, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* EDIFÍCIOS */}
            <div className="grid md:grid-cols-2 gap-4">

              {condominioAberto.edificios.map((e, i) => (
                <div key={i} className="border rounded-xl p-4 bg-gray-50">

                  <h4 className="text-lg font-bold">
                    {e.nome}
                  </h4>

                  <p className="text-sm text-gray-600 mb-2">
                    📐 {e.metragem}
                  </p>

                  <p className="font-semibold text-sm mb-1">
                    Lazer Interno
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {e.lazerInterno.map((l, i) => (
                      <span
                        key={i}
                        className="bg-white border px-2 py-1 rounded-full text-xs"
                      >
                        {l}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>

            {/* FECHAR */}
            <button
              onClick={() => setCondominioAberto(null)}
              className="mt-6 w-full bg-black text-white py-3 rounded-xl"
            >
              Fechar
            </button>

          </div>
        </div>
      )}

    </div>
  );
}