function createCircleChart(percent, color, altcolor, size, fontsize, stroke, unit, amount) {
    let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <path class="mkc_circle-bg" stroke="${altcolor}" stroke-width="${stroke}" fill="none" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="mkc_circle" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${percent},100"  fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
 
        <text class="mkc_info" x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="${fontsize}">${amount} </text>
        <text class="mkc_info_small" x="50%" y="60%" alignment-baseline="central" text-anchor="middle" font-size="2"> ${unit}</text>
    </svg>`;
    return svg;
}

let charts = document.getElementsByClassName('mkCharts');

for (let i = 0; i < charts.length; i++) {
    let chart = charts[i];
    let percent = chart.dataset.percent;
    let unit = ('unit' in chart.dataset) ? chart.dataset.unit : "";
    let amount = ('amount' in chart.dataset) ? chart.dataset.amount : "";
    let color = ('color' in chart.dataset) ? chart.dataset.color : "#eee";
    let altcolor = ('altcolor' in chart.dataset) ? chart.dataset.altcolor : "#eee";
    let size = ('size' in chart.dataset) ? chart.dataset.size : "100";
    let fontsize = ('fontsize' in chart.dataset) ? chart.dataset.fontsize : "4";
    let stroke = ('stroke' in chart.dataset) ? chart.dataset.stroke : "4";
    charts[i].innerHTML = createCircleChart(percent, color, altcolor, size, fontsize, stroke, unit, amount);
}
