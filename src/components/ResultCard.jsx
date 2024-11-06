import React from 'react';
import styled from 'styled-components';

const ResultCard = ({ severity, mainTitle, subtitle, details, recommendation }) => {
    return (
        <CardWrapper severity={severity}>
            <div className="cardm">
                <div className="card">
                    <div className="main">{mainTitle}</div>
                    <div className="mainsub">{subtitle}</div>
                </div>
                <div className="card2">
                    <div className="upper">
                        <div className="description">
                            <div className="descriptiontext"><b>Details: </b>
                                <br />{details}</div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="recommendation">
                            <div className="recommendationtext">
                                <b>Recommendation: </b> <br />{recommendation}</div>
                        </div>
                        <div className="card3">
                            {severity === 'high' ? 'High Risk' : severity === 'medium' ? 'Medium Risk' : 'Low Risk'}
                        </div>
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
}
const CardWrapper = styled.div`
  .cardm {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    position: relative;
    width: 300px;
    height: 130px;
    border-radius: 25px;
    background: whitesmoke;
    color: black;
    z-index: 2;
    transition: .4s ease-in-out;
  }

  .main {
    font-size: 1.5em;
    position: relative;
    top: 0.6em;
    left: 0.5em;
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
    width: 280px;
    height: 130px;
    border-radius: 35px;
    background: white;
    z-index: -1;
    transition: .4s ease-in-out;
  }

  .card:hover {
    background-color: #FFE87C;
    cursor: pointer;
  }

  .card:hover + .card2 {
    height: 300px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
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
    left: -1.45em;
    top: 0.2em;
    font-size: 0.75em;
  }

  .recommendationtext {
    position: relative;
    left: -1.5em;
    top: -0.8em;
    font-size: 1.15em;
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
    transition: .4s ease-in-out;
  }

  .card3 {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 30px;
    top: 4.7em;
    left: -2.4em;
    font-size: 1.24em;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    background: ${({ severity }) =>
            severity === 'high' ? 'red' :
                    severity === 'medium' ? 'orange' :
                            'yellow'};
    transition: .4s ease-in-out;
  }
`;

export default ResultCard;
