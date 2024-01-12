import { styled } from "styled-components";

export const TextField = styled.div`
    position: relative;
    margin: 0.625rem 0.156rem 1.25rem 0.156rem;
    display: block;
    margin: auto;
    width: 50%;
`

export const InputField = styled.input`
    display: inline-block;
    border: thin solid #fafafa;
    border-bottom: solid medium #999;
    color: #444;
    background-color: #F2F2F2;
    padding: 0.625rem;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    width: 40%;

    &:focus {
        border: thin solid #d90000;
        border-bottom: solid medium #d90000;
        background-color: transparent;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:focus~label,valid~label {
        top: -0.625rem;
        left: 0.938rem;
        font-size: small;
        color: #d90000;
        background-color: #fff;
        padding: 0 0.313rem 0 0.313rem;
    }

    @media (max-width: 800px) {
        width: auto;
    }
`

export const SearchLabel = styled.label`
    color: #999;
    position: absolute;
    pointer-events: none;
    left: 0.625rem;
    top: 0.625rem;
    transition: 0.2s;

    &:disabled {
        color: red;
    }
`