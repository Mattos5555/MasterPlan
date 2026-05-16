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
            metragem: "Colunas 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8 DS 86,89m² a 93,61m²",
            lazerInterno: ["Sauna a vapor", "Spa", "Sauna Seca","Salas de Massagem","Academia","Sala Aeróbico"],
          },
          {
            nome: "Lyra",
            metragem: "Colunas 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8 DS 86,89m² a 93,61m²",
            lazerInterno: ["Bistrô", "Home Tv Externo","Salão De Jogos","Streaming Lounge"],
          },
          {
            nome: "Selene",
            metragem: "Colunas 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8 DS 86,89m² a 93,61m²",
            lazerInterno: ["Salão de Festas Adulto", "Wine Bar","Espaço Gourmet","Coworking","Podcast Studio","Sala de Reunião"],
          },
          {
            nome: "Gaia",
            metragem: "Colunas 2 e 3 86,78m² a 93,80m² / Colunas 1 e 4 a 8 DS 86,89m² a 93,61m²",
            lazerInterno: ["Salão de Festas Infantil", "Brinquedoteca",],
          },
        ],
      },

      {
        id: 3,
        nome: "Saint Michel",
        top: "40%",
        left: "30%",

        lazerExterno: [
          "Piscina",
          "Quadra esportiva",
          "Espaço verde",
        ],

        edificios: [
          {
            nome: "SM1",
            metragem: "70m² a 85m²",
            lazerInterno: ["Spa", "Academia"],
          },
          {
            nome: "SM2",
            metragem: "70m² a 85m²",
            lazerInterno: ["Coworking", "Spa"],
          },
          {
            nome: "SM3",
            metragem: "70m² a 85m²",
            lazerInterno: ["Sala multiuso"],
          },
          {
            nome: "SM4",
            metragem: "70m² a 85m²",
            lazerInterno: ["Academia", "Spa"],
          },
          {
            nome: "SM5",
            metragem: "70m² a 85m²",
            lazerInterno: ["Sala de jogos", "Spa"],
          },
        ],
      },

      {
        id: 4,
        nome: "Viure",
        top: "50%",
        left: "70%",

        lazerExterno: [
          "Piscina resort",
          "Beach tennis",
          "Lounge externo",
        ],

        edificios: [
          {
            nome: "V1",
            metragem: "85m² a 95m²",
            lazerInterno: ["Spa", "Academia"],
          },
          {
            nome: "V2",
            metragem: "85m² a 95m²",
            lazerInterno: ["Coworking"],
          },
          {
            nome: "V3",
            metragem: "85m² a 95m²",
            lazerInterno: ["Spa", "Sala multiuso"],
          },
          {
            nome: "V4",
            metragem: "85m² a 95m²",
            lazerInterno: ["Academia"],
          },
        ],
      },

      {
        id: 5,
        nome: "Elos",
        top: "60%",
        left: "40%",

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
        top: "70%",
        left: "55%",

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