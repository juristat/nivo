<img alt="nivo" src="https://raw.githubusercontent.com/plouc/nivo/master/nivo.png" width="216" height="68"/>

[![License][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![nivo channel on discord](https://img.shields.io/badge/discord-nivo-61dafb.svg?style=flat-square)](https://discord.gg/n7Ft74f)
[![Dependencies][gemnasium-image]][gemnasium-url]
[![styled with prettier][prettier-image]][prettier-url]

**nivo** provides supercharged React components to easily build dataviz apps,
it's built on top of d3.

Several libraries already exist for React d3 integration,
but just a few provide server side rendering ability and fully declarative charts.

## Installation

In order to use nivo, you just have to pick the scoped `@juristat` packages according to the charts you wish to use.

```
yarn add @juristat/bar @juristat/sankey ...
```

## Features

*   Highly customizable
*   Motion/transitions, powered by [react-motion](https://github.com/chenglou/react-motion)
*   [Component playground](http://nivo.rocks)
*   [Exhaustive documentation](http://nivo.rocks)
*   Isomorphic rendering
*   [SVG charts](http://nivo.rocks/#/components?filter=svg)
*   [HTML charts](http://nivo.rocks/#/components?filter=html)
*   [Canvas charts](http://nivo.rocks/#/components?filter=canvas)
*   [server side rendering API](https://github.com/plouc/nivo-api)
*   [SVG patterns](http://nivo.rocks/#/guides/patterns)
*   [Gradients](http://nivo.rocks/#/guides/gradients)
*   [responsive charts](http://nivo.rocks/#/components?q=responsive)

## Discussion

Join the [nivo discord community](https://discord.gg/n7Ft74f).

## Packages & components

**nivo** is comprised of several packages/components, for a better overview of the available one,
please try the [components explorer](http://nivo.rocks/#/components).

| package                                                                                                | components                                                                                                                                                                     |
| :----------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**@juristat/bar**](https://github.com/plouc/nivo/tree/master/packages/nivo-bar)                       | [![@juristat/bar NPM version](https://img.shields.io/npm/v/@juristat/bar.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/bar)                                  |
|                                                                                                        | [Bar](http://nivo.rocks/#/bar)                                                                                                                                                 |
|                                                                                                        | [ResponsiveBar](http://nivo.rocks/#/bar)                                                                                                                                       |
|                                                                                                        | [BarCanvas](http://nivo.rocks/#/bar/canvas)                                                                                                                                    |
|                                                                                                        | [ResponsiveBarCanvas](http://nivo.rocks/#/bar/canvas)                                                                                                                          |
| [**@juristat/circle-packing**](https://github.com/plouc/nivo/tree/master/packages/nivo-circle-packing) | [![@juristat/circle-packing NPM version](https://img.shields.io/npm/v/@juristat/circle-packing.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/circle-packing) |
|                                                                                                        | [Bubble](http://nivo.rocks/#/bubble)                                                                                                                                           |
|                                                                                                        | [ResponsiveBubble](http://nivo.rocks/#/bubble)                                                                                                                                 |
|                                                                                                        | [BubbleHtml](http://nivo.rocks/#/bubble/html)                                                                                                                                  |
|                                                                                                        | [ResponsiveBubbleHtml](http://nivo.rocks/#/bubble/html)                                                                                                                        |
|                                                                                                        | [BubbleCanvas](http://nivo.rocks/#/bubble/canvas)                                                                                                                              |
|                                                                                                        | [ResponsiveBubbleCanvas](http://nivo.rocks/#/bubble/canvas)                                                                                                                    |
| [**@juristat/calendar**](https://github.com/plouc/nivo/tree/master/packages/nivo-calendar)             | [![@juristat/calendar NPM version](https://img.shields.io/npm/v/@juristat/calendar.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/calendar)                   |
|                                                                                                        | [Calendar](http://nivo.rocks/#/calendar)                                                                                                                                       |
|                                                                                                        | [ResponsiveCalendar](http://nivo.rocks/#/calendar)                                                                                                                             |
| [**@juristat/chord**](https://github.com/plouc/nivo/tree/master/packages/nivo-chord)                   | [![@juristat/chord NPM version](https://img.shields.io/npm/v/@juristat/chord.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/chord)                            |
|                                                                                                        | [Chord](http://nivo.rocks/#/chord)                                                                                                                                             |
|                                                                                                        | [ResponsiveChord](http://nivo.rocks/#/chord)                                                                                                                                   |
|                                                                                                        | [ChordCanvas](http://nivo.rocks/#/chord/canvas)                                                                                                                                |
|                                                                                                        | [ResponsiveChordCanvas](http://nivo.rocks/#/chord/canvas)                                                                                                                      |
| [**@juristat/heatmap**](https://github.com/plouc/nivo/tree/master/packages/nivo-heatmap)               | [![@juristat/heatmap NPM version](https://img.shields.io/npm/v/@juristat/heatmap.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/heatmap)                      |
|                                                                                                        | [HeatMap](http://nivo.rocks/#/heatmap)                                                                                                                                         |
|                                                                                                        | [ResponsiveHeatMap](http://nivo.rocks/#/heatmap)                                                                                                                               |
|                                                                                                        | [HeatMapCanvas](http://nivo.rocks/#/heatmap/canvas)                                                                                                                            |
|                                                                                                        | [ResponsiveHeatMapCanvas](http://nivo.rocks/#/heatmap/canvas)                                                                                                                  |
| [**@juristat/line**](https://github.com/plouc/nivo/tree/master/packages/nivo-line)                     | [![@juristat/line NPM version](https://img.shields.io/npm/v/@juristat/line.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/line)                               |
|                                                                                                        | [Line](http://nivo.rocks/#/line)                                                                                                                                               |
|                                                                                                        | [ResponsiveLine](http://nivo.rocks/#/line)                                                                                                                                     |
| [**@juristat/pie**](https://github.com/plouc/nivo/tree/master/packages/nivo-pie)                       | [![@juristat/pie NPM version](https://img.shields.io/npm/v/@juristat/pie.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/pie)                                  |
|                                                                                                        | [Pie](http://nivo.rocks/#/pie)                                                                                                                                                 |
|                                                                                                        | [ResponsivePie](http://nivo.rocks/#/pie)                                                                                                                                       |
| [**@juristat/radar**](https://github.com/plouc/nivo/tree/master/packages/nivo-radar)                   | [![@juristat/radar NPM version](https://img.shields.io/npm/v/@juristat/radar.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/radar)                            |
|                                                                                                        | [Radar](http://nivo.rocks/#/radar)                                                                                                                                             |
|                                                                                                        | [ResponsiveRadar](http://nivo.rocks/#/radar)                                                                                                                                   |
| [**@juristat/sankey**](https://github.com/plouc/nivo/tree/master/packages/nivo-sankey)                 | [![@juristat/sankey NPM version](https://img.shields.io/npm/v/@juristat/sankey.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/sankey)                         |
|                                                                                                        | [Sankey](http://nivo.rocks/#/sankey)                                                                                                                                           |
|                                                                                                        | [ResponsiveSankey](http://nivo.rocks/#/sankey)                                                                                                                                 |
| [**@juristat/scatterplot**](https://github.com/plouc/nivo/tree/master/packages/nivo-scatterplot)       | [![@juristat/scatterplot NPM version](https://img.shields.io/npm/v/@juristat/scatterplot.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/scatterplot)          |
|                                                                                                        | [ScatterPlot](http://nivo.rocks/#/scatterplot)                                                                                                                                 |
|                                                                                                        | [ResponsiveScatterPlot](http://nivo.rocks/#/scatterplot)                                                                                                                       |
|                                                                                                        | [ScatterPlotCanvas](http://nivo.rocks/#/scatterplot/canvas)                                                                                                                    |
|                                                                                                        | [ResponsiveScatterPlotCanvas](http://nivo.rocks/#/scatterplot/canvas)                                                                                                          |
| [**@juristat/stream**](https://github.com/plouc/nivo/tree/master/packages/nivo-stream)                 | [![@juristat/stream NPM version](https://img.shields.io/npm/v/@juristat/stream.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/stream)                         |
|                                                                                                        | [Stream](http://nivo.rocks/#/stream)                                                                                                                                           |
|                                                                                                        | [ResponsiveStream](http://nivo.rocks/#/stream)                                                                                                                                 |
| [**@juristat/sunburst**](https://github.com/plouc/nivo/tree/master/packages/nivo-sunburst)             | [![@juristat/sunburst NPM version](https://img.shields.io/npm/v/@juristat/sunburst.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/sunburst)                   |
|                                                                                                        | [Sunburst](http://nivo.rocks/#/sunburst)                                                                                                                                       |
|                                                                                                        | [ResponsiveSunburst](http://nivo.rocks/#/sunburst)                                                                                                                             |
| [**@juristat/treemap**](https://github.com/plouc/nivo/tree/master/packages/nivo-treemap)               | [![@juristat/treemap NPM version](https://img.shields.io/npm/v/@juristat/treemap.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/treemap)                      |
|                                                                                                        | [TreeMap](http://nivo.rocks/#/treemap)                                                                                                                                         |
|                                                                                                        | [ResponsiveTreeMap](http://nivo.rocks/#/treemap)                                                                                                                               |
|                                                                                                        | [TreeMapHtml](http://nivo.rocks/#/treemap/html)                                                                                                                                |
|                                                                                                        | [ResponsiveTreeMapHtml](http://nivo.rocks/#/treemap/html)                                                                                                                      |
|                                                                                                        | [TreeMapCanvas](http://nivo.rocks/#/treemap/canvas)                                                                                                                            |
|                                                                                                        | [ResponsiveTreeMapCanvas](http://nivo.rocks/#/treemap/canvas)                                                                                                                  |
| [**@juristat/voronoi**](https://github.com/plouc/nivo/tree/master/packages/nivo-voronoi)               | [![@juristat/voronoi NPM version](https://img.shields.io/npm/v/@juristat/voronoi.svg?style=flat-square)](https://www.npmjs.com/package/@juristat/voronoi)                      |
|                                                                                                        | [Voronoi](http://nivo.rocks/#/voronoi)                                                                                                                                         |
|                                                                                                        | [ResponsiveVoronoi](http://nivo.rocks/#/voronoi)                                                                                                                               |

## [HTTP API](https://github.com/plouc/nivo-api)

Components available through the HTTP rendering API.

*   [Bar](https://nivo-api.herokuapp.com/samples/bar.svg)
*   [Bubble](https://nivo-api.herokuapp.com/samples/bubble.svg)
*   [Chord](https://nivo-api.herokuapp.com/samples/chord.svg)
*   [HeatMap](https://nivo-api.herokuapp.com/samples/heatmap.svg)
*   [Line](https://nivo-api.herokuapp.com/samples/line.svg)
*   [Pie](https://nivo-api.herokuapp.com/samples/pie.svg)
*   [Radar](https://nivo-api.herokuapp.com/samples/radar.svg)
*   [Sankey](https://nivo-api.herokuapp.com/samples/sankey.svg)
*   [Sunburst](https://nivo-api.herokuapp.com/samples/sunburst.svg)
*   [TreeMap](https://nivo-api.herokuapp.com/samples/treemap.svg)

## Guides

*   [colors](http://nivo.rocks/#/guides/colors)
*   [legends](http://nivo.rocks/#/guides/legends)
*   [gradients](http://nivo.rocks/#/guides/gradients)
*   [patterns](http://nivo.rocks/#/guides/patterns)

## Repositories

*   [nivo](https://github.com/plouc/nivo) - nivo packages, website, storybook and examples
*   [nivo-api](https://github.com/plouc/nivo-api) - the nivo http api
*   [nivo-api-docker](https://github.com/plouc/nivo-api-docker) - a Docker image for the nivo http api

## Credits

*   [d3](https://d3js.org/)
*   [react](https://facebook.github.io/react/)
*   [react-motion](https://github.com/chenglou/react-motion)
*   …

[license-image]: https://img.shields.io/github/license/plouc/nivo.svg?style=flat-square
[license-url]: https://github.com/plouc/nivo/blob/master/LICENSE.md
[npm-image]: https://img.shields.io/npm/v/@juristat/core.svg?style=flat-square
[npm-url]: https://www.npmjs.com/~nivo
[travis-image]: https://img.shields.io/travis/plouc/nivo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/nivo
[prettier-image]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[gemnasium-image]: https://img.shields.io/gemnasium/plouc/nivo.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/plouc/nivo
