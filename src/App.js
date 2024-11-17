import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCovidData } from './Redux/Action';
import Filter from './Components/Filter';
import PieChart from './Components/PieChart';
import MapView from './Components/MapView';
import 'leaflet/dist/leaflet.css';
import LineChart from './Components/LineChart';
import Slider from 'react-slick';
import './App.css';

function App({ data, selectedState, fetchCovidData }) {
  useEffect(() => {
    fetchCovidData(); 
  }, [fetchCovidData]);

  const filteredData = selectedState
    ? data.filter((state) => state.state === selectedState)
    : data;

  const sliderSettings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='HeaderDiv'>
        <h1>COVID-19 Dashboard</h1>
      </div>
      <Filter /> 
      {filteredData.length > 0 && (
        <>
          <div className='CasesDiv'>
            <div className='Datadiv'>
              <h2>{filteredData[0].state}</h2>
              <div className="CaseDetails">
                <div className="CaseItem">
                  <div className="CaseHeading">Active:</div>
                  <div className='CaseValue'>{filteredData[0].active}</div>
                </div>
                <div className="CaseItem">
                  <div className="CaseHeading">Recovered:</div>
                  <div className='CaseValue'>{filteredData[0].recovered}</div>
                </div>
                <div className="CaseItem">
                  <div className="CaseHeading">Deaths:</div>
                  <div className='CaseValue'>{filteredData[0].deaths}</div>
                </div>
              </div>
            </div>
            <div className='ChartDiv'><PieChart data={filteredData[0]} /></div>
          </div>
          <div className="CarouselContainer">
            <Slider {...sliderSettings}>
              <div>
                <MapView data={filteredData} />
              </div>
              <div>
                <LineChart data={data} />
              </div>
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.states, 
  selectedState: state.selectedState,
});

const mapDispatchToProps = {
  fetchCovidData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
