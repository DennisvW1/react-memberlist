import React, { useState } from 'react';
import styled from 'styled-components';

const TextField = styled.div`
    position: relative;
    margin: 0.625rem 0.156rem 1.25rem 0.156rem;
    display: block;
    margin: auto;
    width: 50%;
`

const InputField = styled.input`
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

const SearchLabel = styled.label`
    color: #999;
    position: absolute;
    pointer-events: none;
    left: 0.625rem;
    top: 0.625rem;
    transition: 0.2s;
`

function Searchbar({ onSearch, placeholder }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Geef de zoekterm terug aan de parent.
        onSearch(value);
    };

    return (
        <TextField>
            <InputField type="text" required value={searchTerm} onChange={handleInputChange} />
            <SearchLabel>{searchTerm ? null : placeholder}</SearchLabel>
        </TextField>
    )
}

export default Searchbar
