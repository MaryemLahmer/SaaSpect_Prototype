import React from "react";
import styled from "styled-components";

function getSeverityColor(severity) {
  switch (severity) {
    case "critical":
      return "bg-red-500 hover:bg-red-400";
    case "high":
      return "bg-orange-500 hover:bg-red-500";
    case "medium":
      return "bg-yellow-500 hover:bg-yellow-500";
    case "low":
      return "bg-green-500 hover:bg-green-600";
    case "inexistant":
    default:
      return "bg-gray-300 hover:bg-gray-400";
  }
}

const ResultCard = ({
  severity,
  mainTitle,
  subtitle,
  details,
  recommendation,
}) => {
  return (
    <CardWrapper severity={severity}>
      <div className="cardm ">
        <div
          className={`card bg-white hover:bg-${getSeverityColor(
            severity
          )} transition duration-300`}
        >
          <h5 className="main h5 text-center">{mainTitle}</h5>
        </div>
        <div className="card2 text-center bg-n-1">
          <div className="upper">
            <div className="description">
              <div className="descriptiontext">{details}</div>
            </div>
          </div>
          <div className="lower">
            <div className="recommendation">
              <div className="recommendationtext">{recommendation}</div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  .cardm {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 130px;
    border-radius: 35px;
    color: black;
    z-index: 2;
    transition: 0.4s ease-in-out;
  }

  .main {
    position: relative;
  }

  .mainsub {
    position: relative;
    top: 2em;
    left: 1.2em;
    font-size: 0.8em;
  }

  .card2 {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 130px;
    border-radius: 35px;
    z-index: -1;
    transition: 0.4s ease-in-out;
  }

  .card:hover {
    cursor: pointer;
    z-index: 2;
  }

  .card:hover + .card2 {
    height: 280px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 1;
  }

  .card:hover + .card2 .lower {
    top: 20.2em;
  }

  .upper {
    display: flex;
    flex-direction: row;
    position: relative;
    color: black;
    left: 1.8em;
    top: 0.5em;
    gap: 4em;
  }

  .descriptiontext {
    position: relative;
    font-size: 1rem;
    padding-left: 0rem;
    padding-right: 2.5rem;
  }

  .recommendationtext {
    position: relative;
    left: -1.5em;
    top: -0.8em;
    font-size: 1rem;
  }

  .lower {
    display: flex;
    flex-direction: row;
    position: absolute;
    text-align: center;
    color: black;
    left: 3em;
    top: 1em;
    margin-top: 0.7em;
    font-size: 0.7em;
    transition: 0.4s ease-in-out;
  }

  .card3 {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 20px;
    top: 4.7em;
    left: -2.4em;
    font-size: 1.24em;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    background: ${({ severity }) =>
      severity === "high"
        ? "red"
        : severity === "medium"
        ? "orange"
        : severity === "low"
        ? "yellow"
        : severity === "inexistant"
        ? "green"
        : "gray"};
    transition: 0.4s ease-in-out;
  }
`;

export default ResultCard;
