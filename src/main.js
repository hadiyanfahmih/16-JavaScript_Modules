import { createGrid } from './modules/grid.js';

const columns = ["Nama", "Umur", "Penampilan"];

const data = [
  ["Hadiyan", "25", "Ganteng"],
  ["Fahmi", "25", "Ganteng Juga"],
];

const grid = createGrid(columns, data);

grid.render(document.getElementById("grid"));
