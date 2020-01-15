d3.select("svg")
    .style("background-color", "skyblue")
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height", 200)
    .attr("width", 600)
    .attr("fill", "transparent")
    .attr("stroke", "red")
    .attr("stroke-width", 20)
d3.select("h2")
    .text("A really simple description")
    .style("color", "red")
d3.select("svg")
    .select("circle")
    .attr("fill","purple")
console.log('seeing if it works')
d3.select("svg")
    .style("opacity", 0.3)
    .select("text")
    .remove()
    for(let i = 0; i<10; i++){
        d3.select("svg")
        .append("circle")
        .attr("cx",(350+i*15))
        .attr("cy",50)
        .attr("r",10)
        .attr("fill","black")
    }
d3.select("body")
    .append("svg")
    .attr("id","chessboard")
    .attr("width",300)
    .attr("height",300)
    .style("opacity",1)
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height", 180)
    .attr("width", 180)
    .attr("fill", "brown")
for(let x = 0; x<8; x++){
    for(let y = 0; y<8; y++){
        if(y%2 === 0){
            if(x%2===0){
                color = "white"
            }else{
                color = "black"
            }
        }else{
            if(x%2 !==0){
                color = "white"
            }else{
                color = "black"
            }
        }
        d3.select("svg#chessboard")
        .append("rect")
        .attr("x",(10+(x*20)))
        .attr("y",(10+(y*20)))
        .attr("height", 20)
        .attr("width", 20)
        .attr("fill",color)
        .attr("stroke", "transparent")
    }
}
rankNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
fileLetters = ["a","b","c","d","e","f","g","h"]