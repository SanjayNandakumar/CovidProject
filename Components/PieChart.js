import React from 'react';
import Plot from 'react-plotly.js';

const PieChart = ({ data }) => {
  const labels = ['Active', 'Recovered', 'Deaths'];
  const values = [data.active, data.recovered, data.deaths];

  return (
    <Plot
      data={[
        {
          labels,
          values,
          type: 'pie',
          hole: 0.3, 
          textinfo: 'label+percent', 
          hoverinfo: 'label+value', 
          marker: {
            colors: ['#FF5733', '#33FF57', '#3357FF'], 
            line: {
              color: '#ffffff',
              width: 2, 
            },
          },
          insidetextfont: {
            family: 'Roboto Condensed', 
            size: 14,
            color: '#ffffff',
          },
          outsidetextfont: {
            family: 'Arial, sans-serif', 
            size: 12,
            color: '#777',
          },
        },
      ]}
      layout={{
        title: {
          text: `${data.state} Covid Data Distribution`,
          font: {
            family: 'Roboto Condensed',
            size: 20,
            color: '#777',
          },
        },
        margin: {
          t: 140, 
          b: 40, 
          l: 40, 
          r: 40, 
        },
        height: '100%',
        showlegend: true,
        legend: {
          orientation: 'h', 
          x: 0.5,
          y: -0.2,
          xanchor: 'center', 
          font: {
            size: 12,
          },
        },
        paper_bgcolor: '#f9f9f9', 
        plot_bgcolor: '#f9f9f9', 
      }}
      config={{
        responsive: true, 
        displayModeBar: false,
      }}
    />
  );
};

export default PieChart;
