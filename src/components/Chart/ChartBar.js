import React from "react";
import './ChartBar.css'

const ChartBar = (props) => {

 let barfillHeight = '0%';

 if (props.max > 0){
  barfillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
 }
 
 return <div className="chart-bar">
  <dir className="chart-bar__inner">
   <dir className="chart-bar__fill" style={{height: barfillHeight , backgroundColor: 'red'}}>
   props.value
   </dir>
   <dir className="chart-bar__label">{props.label}</dir>
  </dir>
 </div>

}

export default ChartBar;