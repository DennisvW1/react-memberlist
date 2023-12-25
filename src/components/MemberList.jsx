import { useState, useEffect } from "react";
import MemberListItems from "./MemberListItems";
import Fuse from 'fuse.js';
import styled from 'styled-components';
import Searchbar from "./Searchbar/Searchbar";

const Component = styled.div`
    width: auto;
    height: auto;
    padding: 0.25rem;
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

    @media (max-width: 850px) {
        padding: 0
    }
`

const HeaderItems = styled.div`
    width: auto;
`

const HeaderItem = styled.div`
    display: inline-flex;
    width: 24%;
    padding: 0.25rem;
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 850px) {
        overflow: hidden;
        width: 23%;
    }

    @media (max-width: 500px) {
        overflow: hidden;
        width: 22%;
    }
`

const HeaderItem2 = styled.div`
    display: inline-flex;
    width: 24%;
    padding: 0.25rem;

    @media (max-width: 850px) {
        overflow: hidden;
        width: 23%;
    }

    @media (max-width: 500px) {
        overflow: hidden;
        width: 22%;
    }
`


function MemberList({ data, children }) {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState(data);
    // true = asc, false = desc
    const [sortOrder, setSortOrder] = useState({ naam: true, email: true, visit: true })

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

    const handleInputChange = (value) => {
        setSearch(value);
    }

    const fuse = new Fuse(items, fuseOptions);
    const result = fuse.search(search);

    return (
        <>
            <Component>
                <Searchbar placeholder="Zoek in de lijst" onSearch={handleInputChange} />
                <Entries>
                    <Header>
                        <HeaderItems>
                            <HeaderItem onClick={() => handleSort("naam")}>Naam</HeaderItem>
                            <HeaderItem onClick={() => handleSort("email")}>Email</HeaderItem>
                            <HeaderItem onClick={() => handleSort("visit")}>Laatste bezoek</HeaderItem>
                            <HeaderItem2> </HeaderItem2>
                        </HeaderItems>
                    </Header>

                    <MemberListItems data={search.length > 0 ? result : items} />
                </Entries>
            </Component>
            {children}
        </>
    );
}

export default MemberList;