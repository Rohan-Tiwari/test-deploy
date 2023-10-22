import React, { Component } from "react";
import BarChart from "./BarChart";
import Doughnut from "./Doughnut";
import Chart from "chart.js/auto";
import "./DashboardApp.css";
import GaugeChart from "react-gauge-chart";

class DashboardApp extends Component {
  render() {
    return (
      
      <div className="dasboardapp">
        <div className="title">
          <header>Your Dashboard</header>
        </div>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={[{"label": "rewards", value: 31},{"label": "Target points", value: 60}]}
              title={'Rewards Accumulated'}
              color="#ff6e54"
            />
          </div>
          <GaugeChart id="gauge-chart2" 
            nrOfLevels={10}
            colors={["#FF5F6D", "#FFC371"]}  
            percent={0.45} 
            textColor={'black'}
          />
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={[{"label": "savings", value: 31},{"label": "investments", value: 14},
              {"label": "bills", value: 20},{"label": "rent", value: 10},
              {"label": "travel", value: 20},{"label": "grocery", value: 15}]}//{this.state.feeds[2].data}
              title={'Data 4'}//{this.state.feeds[2].title}
              colors={[
                "#003f5c",
                "#444e86",
                "#955196",
                "#dd5182",
                "#ff6e54",
                "#ffa600",
              ]}
            />
          </div>
       </div>
      </div>
    );
  }
}

export default DashboardApp;
