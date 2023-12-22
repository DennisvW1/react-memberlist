import { useState, useEffect } from "react";
import MemberListItems from "./MemberListItems";
import Fuse from 'fuse.js';
import styled from 'styled-components';

const Component = styled.div`
    width: auto;
    height: auto;
    padding: 0.25rem;
`

const Search = styled.input`
    display: block;
    margin: auto;
    width: 30%;
    padding: 0.25rem;
    &:focus {
        outline: none;
    }
`

const Entries = styled.div`
    padding: 0.25rem;
`

const Header = styled.div`
border: 1px solid #D90000;
background: #D90000;
width: auto;
padding: 0.25rem;
color: #fff;
`

const HeaderItems = styled.div`
    width: 75%;
    border: 1px solid black;
    `
    
const HeaderItem = styled.div`
    border: 1px solid black;
    display: inline-flex;
    width: 32%;
    padding: 0.25rem;
    &:hover {
        cursor: pointer;
    }
`

function MemberList({ data, children }) {
    const [ search, setSearch ] = useState("");
    const [ items, setItems ] = useState(data);
    // true = asc, false = desc
    const [ sortOrder, setSortOrder ] = useState({naam: true, email: true, visit: true})    
    
    const fuseOptions = {
        includeScore: true,
        threshold: 0.2,
        keys: ["naam", "email"]
    }

    useEffect(() => {
        setItems(data);
    }, [data])

    const handleSort = (type) => {
        const types = {
            naam: "naam",
            email: "email",
            visit: "lastVisit"
        }

        const sortArray = items;
        const sortProperty = types[type];
        let sort;
        let updatedSortOrder;
        
        if (sortOrder[type]) {
            sort = sortArray.sort((a, b) => (a[sortProperty] > b[sortProperty]) ? 1 : -1);
        } else {
            sort = sortArray.sort((a, b) => (b[sortProperty] > a[sortProperty]) ? 1 : -1);
        }

        updatedSortOrder = { ...sortOrder, [type]: !sortOrder[type] }

        setSortOrder(updatedSortOrder)

        setItems(sort);
    }

    const handleInputChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);
    }

    const fuse = new Fuse(items, fuseOptions);
    const result = fuse.search(search);

    return (
        <>
            <Component>
                <Search type="text" name="search" placeholder="Zoek hier in de lijst" value={search} onChange={handleInputChange} style={{ padding: "0.25rem", marginBottom: "0.25rem"}}/>
                <Entries>
                    <Header>
                        {/* <div style={{ display: "inline-flex", width: "100%" }}> */}
                            <HeaderItems>
                                <HeaderItem onClick={() => handleSort("naam")}>Naam</HeaderItem>
                                <HeaderItem onClick={() => handleSort("email")}>Email</HeaderItem>
                                <HeaderItem onClick={() => handleSort("visit")}>Laatste bezoek</HeaderItem>
                            </HeaderItems>
                        {/* </div> */}
                    </Header>

                    <MemberListItems data={result.length > 0 ? result : items} />
                </Entries>
            </Component>
            { children }
        </>
    );
  }
  
  export default MemberList;