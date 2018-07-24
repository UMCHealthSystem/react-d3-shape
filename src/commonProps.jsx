"use strict";

import D3Scale from 'd3-scale';

const width = 960;
const height = 500;
const margins = {top: 80, right: 100, bottom: 80, left: 100};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true,
  showLegend: true
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  innerRadius: 0,
//  categoricalColors: D3Scale.scaleCategory10(),
  categoricalColors: ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],
  pieSort: () => {},
  pieTextShow: true
}
