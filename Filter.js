import React from 'react';
import { connect } from 'react-redux';
import { setSelectedState } from '../Redux/Action';
import './filter.css'

function Filter({ states, setSelectedState }) {
  return (
    <div className="SelectorDiv">
    <select onChange={(e) => setSelectedState(e.target.value)}>
      <option value="">All States</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  </div>  
  );
}

const mapStateToProps = (state) => ({
  states: state.states.map((d) => d.state),
});

const mapDispatchToProps = {
  setSelectedState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
