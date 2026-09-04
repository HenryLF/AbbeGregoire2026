import { Chart } from "chart.js/auto";

Chart.defaults.elements.point.pointStyle = false;

Chart.defaults.plugins.legend.display = false;
Chart.defaults.datasets.line.cubicInterpolationMode = "monotone";
Chart.defaults.datasets.line.borderWidth = 5;

Chart.defaults.font.family = "Helvetica";
