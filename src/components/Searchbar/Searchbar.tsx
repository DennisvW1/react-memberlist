import React, { useState } from 'react';
import { TextField, InputField, SearchLabel } from '../Styled/SearchBar';

type Props = {
    onSearch: any;
    placeholder: string;
}

function Searchbar({ onSearch, placeholder }: Props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e: any) => {
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
