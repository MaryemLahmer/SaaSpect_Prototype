import React from 'react';
import styled from 'styled-components';

const UserSubscription = () => {
    return (
        <StyledWrapper>
            <section className="card">
                <header>
                    <p>
                        Account <span className="active">active</span>
                    </p>
                </header>
                <div className="premium-plan">
                    <span>Premium Plan</span>
                </div>
                <main>
                    <p>Web Scanner</p>
                </main>
            </section>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .card {
    width: 500px;
    height: 140px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid #9F7AEA;
    box-shadow: 0 0 10px 3px rgba(159, 122, 234, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  header {
    display: flex;
    justify-content: center;
    color: #BDBFB7;
    font-size: 18px;
  }

  .active {
    color: #2CAD3D;
  }

  .premium-plan {
    width: 100%;
    text-align: center;
    background: gold;
    color: black;
    padding: 10px 0;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 0;
  }

  main {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 16px;
  }
`;

export default UserSubscription;
