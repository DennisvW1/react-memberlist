import styled from 'styled-components';

export const Button = styled.button`
    display: inline-flex;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    border: 1px solid #D90000;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    &:hover {
        background: #D90000;
        color: white;
        cursor: pointer;
    }

    @media (max-width: 850px) {
        overflow-wrap: anywhere;
    }

    @media (max-width: 700px) {
        overflow-wrap: anywhere;

        font-size: 70%;
    }

    @media (max-width: 550px) {
        overflow-wrap: anywhere;
        padding: 0;

        font-size: 60%;
    }

    @media (max-width: 500px) {
        padding: 0;
        overflow-wrap: anywhere;
    }
`