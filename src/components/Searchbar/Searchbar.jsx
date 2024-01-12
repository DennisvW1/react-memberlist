import React, { useState } from 'react';
import { TextField, InputField, SearchLabel } from '../Styled/SearchBar';

function Searchbar({ onSearch, placeholder, disabled }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Geef de zoekterm terug aan de parent.
        onSearch(value);
    };

    return (
        <TextField>
            <InputField type="text" required value={searchTerm} onChange={handleInputChange} disabled={disabled} />
            <SearchLabel disabled={disabled}>{searchTerm ? null : placeholder}</SearchLabel>
        </TextField>
    )
}

export default Searchbar
