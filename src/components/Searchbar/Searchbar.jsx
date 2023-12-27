import React, { useState } from 'react';
import { TextField, InputField, SearchLabel } from '../Styled/SearchBar';

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
