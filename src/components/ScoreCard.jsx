import React from 'react';
import styled from 'styled-components';

const ScoreCard = () => {
  return (
    <StyledWrapper>
      <div className="score-card">
        <div className="card-header">
          <div className="track-info">
            <div className="track-details">
              <span className="track-title">Your website needs attention!</span>
              <p className="track-artist">scanned on 08/11/2024</p>
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
              style={{ fill: "none", stroke: "#000000", strokeWidth: "1px" }}
              transform="translate(0,1036.3622)"
            />
          </g>
        </svg>

          </div>
        </div>
        <div className="progress-container">
          <div className="progress-bar" />
        </div>
        <div className="progress-time">
          <span>Safe</span>
          <span>Not Safe</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  .score-card {
    width: 100%;
    max-width: 600px;
    height: 150px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .score-card:hover {
    transform: translateY(-5px);
  }

  /* Existing styles for the score card content */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #fff;
  }

  .track-info {
    display: flex;
    align-items: center;
  }

  .track-details {
    margin-left: 12px;
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
    height: 6px;
    background-color: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 80%;
    background-color: #ff0000;
    border-radius: 3px;
  }

  .progress-time {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 16px 16px;
    font-size: 0.85rem;
    color: #6b7280;
  }
`;


export default ScoreCard;
