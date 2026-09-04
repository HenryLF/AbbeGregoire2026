import { LaTeX } from "@weasyprint-tsx/ui";

interface DataSet {
  label_txt: string;
  data_txt: string;
  labels: (string | number)[];

  data: number[];
  type: "bar" | "line" | "pie";
}

export const serie1: DataSet = {
  label_txt: "Utilisation de l’eau dans les foyers",
  data_txt: "Quantité moyenne consommée par jour (en L)",
  labels: [
    "Boisson",
    "Cuisine",
    "Voiture,\nJardin",
    "Vaisselle",
    "Linge",
    "Sanitaires",
    "Bains,\nDouches",
    "Divers ",
  ],
  data: [1.4, 8.4, 8.4, 14, 16.8, 28, 54.6, 8.4],
  type: "bar",
};

export const serie2: DataSet = {
  label_txt: "Année",
  data_txt: "Variation (en cm)",
  labels: [1880, 1900, 1920, 1940, 1960, 1980, 2000],
  data: [0, 1, 2, 4, 5, 8, 13],
  type: "line",
};

export const serie3: DataSet = {
  label_txt: "Température en °C",
  data_txt: "Nombre de jours",
  labels: [
    "[−10 ; −5[",
    "[−5 ; 0[",
    "[0 ; 5[",
    "[5 ; 10[",
    "[10 ; 15[",
    "[15 ; 20[",
    "[20 ; 25[",
    "[25 ; 30[",
    "[30 ; 35[",
  ],
  data: [5, 9, 31, 39, 64, 66, 70, 63, 18],
  type: "bar",
};

export const serie4: DataSet = {
  label_txt: "Dépôts (en €)",
  data_txt: "Nombre de dépôts",
  labels: ["[0 ; 800[", "[800 ; 2 000[", "[2 000 ; 5 000[", "[5 000 ; 12 000["],
  data: [504, 300, 216, 180],
  type: "pie",
};

export const h_pile_route_littoral = [
  37.3, 36.1, 39.2, 37, 38.8, 37.8, 40.5, 40.7, 38, 35.5, 38.1, 37.2, 40.3,
  39.4, 35.1, 38.7, 38.3, 40.2, 40.6, 37.4, 39.5, 37.4, 38.3, 35.4, 39.2, 36.1,
  39.5, 37.5, 38.1, 40.5, 39.4, 38.4, 37.3, 35.6, 40.4, 35.2, 38.6, 39.4, 40.3,
  38.6, 40.2, 37, 37.9, 37.8, 35.2, 38.8, 40.5, 39,
];

export const c_plomb_labels = [
  <LaTeX>[0 ; 5[ </LaTeX>,
  <LaTeX>[5 ; 10[ </LaTeX>,
  <LaTeX>[10 ; 15[ </LaTeX>,
  <LaTeX>[15 ; 20[ </LaTeX>,
  <LaTeX>[20 ; 25[ </LaTeX>,
  <LaTeX>[25 ; 30[ </LaTeX>,
  <LaTeX>[30 ; 35[</LaTeX>,
];
export const c_plomb_values = [150, 42, 58, 27, 23, 55, 35];

export const db_labels = [
  <LaTeX>[0 ; 15[ </LaTeX>,
  <LaTeX>[15 ; 20[ </LaTeX>,
  <LaTeX>[20 ; 25[ </LaTeX>,
  <LaTeX>[25 ; 30[ </LaTeX>,
  <LaTeX>[30 ; 35[ </LaTeX>,
  <LaTeX>[35 ; 40[ </LaTeX>,
  <LaTeX>[40 ; 45[</LaTeX>,
];
export const db_values = [6, 4, 12, 22, 18, 10, 2];
