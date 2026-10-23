import { ChartObj } from "zefpdf-lab/ui/Chart";

ChartObj.defaults.elements.point.pointStyle = false;

ChartObj.defaults.plugins.legend.display = false;
ChartObj.defaults.datasets.line.cubicInterpolationMode = "monotone";
ChartObj.defaults.datasets.line.borderWidth = 5;

ChartObj.defaults.font.family = "Helvetica";
