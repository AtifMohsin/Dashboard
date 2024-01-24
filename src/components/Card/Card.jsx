import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";


const Card = (props) => {

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

    {expanded? <ExpandableCard {... props} setExpanded={toggleExpanded}/>:
    <CompactCard {...props} setExpanded = {toggleExpanded} />}

    </div>
 
)
  }
// Compact version of the Card 

function CompactCard ({title,color,barValue,value,png,series, setExpanded}) {

 const Png = png
  return (
    
  <div className='CompactCard'
  style={{background: color.backGround }} onClick={setExpanded}>
    <div className='radialBar'>
      <CircularProgressbar
        value={barValue}
        text={`${barValue}%`}
      />

      <span>{title}</span>


    </div>
    <div className='detail'>
      <Png />
      <span>
        {value}
      </span>
      <span>Last24 hours</span>
    </div>
  </div>
  )

}

function ExpandableCard ({title,color,barValue,value,png,series, setExpanded}) {

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };



  return (
    <div
    className="ExpandedCard"
    style={{
      background:color.backGround
    }}
    layoutId="expandableCard"
  >
    <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
      <UilTimes onClick={setExpanded} />
    </div>
      <span>{title}</span>
    <div className="chartContainer">
      <Chart options={data.options} series={series} type="area" />
    </div>
    <span>Last 24 hours</span>
  </div>
);
}






export default Card




