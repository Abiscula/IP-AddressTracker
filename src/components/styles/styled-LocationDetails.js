import styled from 'styled-components'

export const LocationField = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    width: 60%;
    background: #fefefe;
    padding: 1.5%;
    border-radius: 10px;
    box-shadow: 0 1rem 2rem -0.4rem hsl(0, 0%, 0%, 0.1);
    z-index: 999;

    div {
        display: flex;
        flex-direction: column;
        width: 20%;
        border-right: 1px solid gray;
    }

    div:last-child {
        border: none;
    }

    span {
        font-weight: 500;
        color: hsl(0, 0%, 59%);
        display: flex;
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
    }

    @media (max-width: 375px) {
        flex-direction: column;
        width: 80%;
        margin-top: 10rem;
        position: absolute;
        
        div {
            border: none;
            text-align: center;
            width: 100%;
        }

        span {
            font-size: 15px;
            margin: 0 auto;
        }
        
  }
`