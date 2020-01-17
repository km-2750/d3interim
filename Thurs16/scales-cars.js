var margin = {top: 30, right: 30, bottom: 30, left: 30};
var width = 660 - margin.left - margin.right,
    height = 460 - margin.top - margin.bottom;
d3.select("body")
    .style("background-color", "#0066cc")
    .append("svg")
    .attr("id", "carsScatter")
    .attr("width",660)
    .attr("height", 460)
    .style("background-color", "white")
d3.select("svg#carsScatter")
    .append("g")
    .attr("id","scatterInner")
    .attr("transform", "translate(" + margin.left+"," + margin.top +")")
d3.select("g#scatterInner")
    .append("rect")
    .attr("x", 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .attr("fill", "transparent")
    .attr('stroke', 'black')

let dispDomain = cars.map(d => d.disp)
let mpgDomain = cars.map(d => d.mpg)
let wtDomain = cars.map(d => d.wt)
let cylDomain = cars.map(d => d.cyl)


let dispXScale = 
d3.scaleLinear()
    .domain(d3.extent(dispDomain))
    .range([50, 550])
let mpgYScale = 
d3.scaleLinear()
    .domain(d3.extent(mpgDomain))
    .range([350, 50])
let wtrScale = 
d3.scaleSqrt()
    .domain(d3.extent(wtDomain))
    .range([0,25])
let cylColorScale = 
d3.scaleSequential()
    .domain(d3.extent(cylDomain))
    .interpolator(d3.interpolateCool)


d3.selectAll("g#scatterInner")
    .selectAll("circle")
    .data(cars)
    .enter()
    .append("circle")
    .attr("cx", (d,i) => dispXScale(dispDomain[i]))
    .attr("cy", (d,i) => mpgYScale(mpgDomain[i]))
    .attr("r", (d,i) => wtrScale(wtDomain[i]))
    .attr("stroke", (d,i) => cylColorScale(cylDomain[i]))
    .attr("fill", "transparent")
    
let xAxis = d3.axisBottom(dispXScale)    
let yAxis = d3.axisLeft(mpgYScale)
let innerHeight = 400

d3.select("g#scatterInner")
  .append('g')
  .attr('transform', 'translate('+ 0 +', ' + innerHeight + ')')
  .attr('class', 'x-axis')
  .call(xAxis)

d3.select("g#scatterInner")
  .append('g')
  .attr('transform', 'translate(' + 0 + ', ' + 0 + ')')
  .attr('class', 'y-axis')
  .call(yAxis)