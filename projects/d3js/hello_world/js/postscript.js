'use strict';
let dat = [1,2,3,4,5];
(function(){

    const addSVG = () => {
        d3.select('body').append('svg')
        .attr('width', 50).attr('height', 50)
        .append('circle')
        .attr('cx', 25).attr('cy', 25).attr('r', 25)
        .style('fill', 'purple');
    };

    addSVG();

    // Bind the data to the SVG
    
    const bindData = () => {
        let sel = d3.select('main').selectAll('p')
        .data(dat);

        sel.exit().remove();

        sel.enter()
        .append('p')
        .text('hello');
    }

    bindData();

})();