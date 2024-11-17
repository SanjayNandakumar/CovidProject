import React from 'react';
import Plot from 'react-plotly.js';

const LineChart = ({ data }) => {
  const states = data.map((state) => state.state);
  const activeCases = data.map((state) => state.active);
  const recoveredCases = data.map((state) => state.recovered);
  const deathCases = data.map((state) => state.deaths);
  const scaleFactor = 1000;  
  const activeCasesScaled = activeCases.map((value) => value );
  const recoveredCasesScaled = recoveredCases.map((value) => value );
  const deathCasesScaled = deathCases.map((value) => value );

  console.log("Scaled Active cases: ", activeCasesScaled);
  console.log("Scaled Recovered cases: ", recoveredCasesScaled);
  console.log("Scaled Death cases: ", deathCasesScaled);

  return (
    <Plot
      data={[
        { x: states, y: activeCasesScaled, type: 'scatter', mode: 'lines', name: 'Active' },
        { x: states, y: recoveredCasesScaled, type: 'scatter', mode: 'lines', name: 'Recovered' },
        { x: states, y: deathCasesScaled, type: 'scatter', mode: 'lines', name: 'Deaths' },
      ]}
      layout={{
        title: 'Covid-19 Trends by State',
        yaxis: {
          title: 'Cases (in thousands)',
          tickformat: ',.0f',
        },
        width: 1300, 
        height: 800,  
      }}
    />
  );
};

export default LineChart;
