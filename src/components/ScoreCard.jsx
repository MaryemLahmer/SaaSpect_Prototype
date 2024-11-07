import React from "react";
import styled from "styled-components";

const ScoreCard = () => {
  return (
    <StyledWrapper>
      <div className="score-card border-4">
        <div className="card-header">
          <div className="track-info">
            <div className="track-details  text-center animate-fadeIn">
              <h2 className="text-center h2">
                Your web app needs
                <span style={{ color: "#c62e2e" }} className="font-bold">
                  {" "}
                  ATTENTION!
                </span>
              </h2>
              <h5 className="h5 font-code text-n-3">scanned on 11/08/2024</h5>
            </div>
          </div>
          <div className="card-icons">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0,-1036.3622)">
                <path
                  d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
                  style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
                  transform="matrix(0.84528301,0,0,0.84528301,33.943395,1042.1773)"
                />
                <path
                  d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
                  style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
                  transform="matrix(0.84528301,0,0,0.84528301,33.943395,1052.1773)"
                />
                <path
                  d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z"
                  style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
                  transform="matrix(0.84528301,0,0,0.84528301,23.943395,1047.1773)"
                />
                <path
                  d="M 13,3 3,8 13,13"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "1px",
                  }}
                  transform="translate(0,1036.3622)"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="progress-container">
          <div class="loaderBar"></div>
        </div>
        <div className="progress-time font-code ">
          {"NOT SAFE".split("").map((letter, index) => (
            <span
              key={index}
              className={` opacity-0 animate-fadeIn " ${
                letter === " " ? "w-[1rem]" : ""
              }`}
              style={{ animationDelay: `${index * 0.5}s`, color: "#c62e2e" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-bottom: 0rem;
  display: flex;
  justify-content: center;

  .loaderBar {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #212121;
    box-shadow: #ffff -2px 2px 4px 0px inset;
    position: relative;
    overflow: hidden;
  }

  .loaderBar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 5px;
    background: #4caf50; /* Start with green */
    animation: fillProgress 2.5s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes fillProgress {
    0% {
      width: 0;
      background-color: #387f39; /* Green */
    }
    15% {
      width: 15%;
      background-color: #bedc74; /* Light green */
    }
    33% {
      width: 33.333%;
      background-color: #f6e96b; /* Yellow */
    }
    53% {
      width: 53%;
      background-color: #ffb22c; /* Orange */
    }
    76% {
      width: 76%;
      background-color: #ee4e4e; /* Light red */
    }
    100% {
      width: 89%;
      background-color: #c62e2e; /* Red */
    }
  }

  .score-card {
    margin-top: 3rem;
    width: 68%;
    height: 12rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    overflow: hidden;
    margin-left: -11rem;
    border: red;
  }

  .card-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .track-info {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .track-details {
    width: 100%;
    margin-left: 12px;
    justify-content: center;
    align-items: center;
  }

  .track-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .track-artist {
    font-size: 0.9rem;
    color: #666;
  }

  .card-icons {
    display: flex;
    align-items: center;
    margin-left: 16px; /* Space between icon and other elements */
  }

  .progress-container {
    position: relative;
    margin: 16px 16px 8px 16px;
    height: 15px;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-time {
    display: flex;
    justify-content: end;
    font-size: 1.2rem;
    margin-right: 2rem;
  }
`;

export default ScoreCard;
