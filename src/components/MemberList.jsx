import { useState, useEffect } from "react";
import MemberListItems from "./MemberListItems";
import Fuse from 'fuse.js';
import styled from 'styled-components';
import Searchbar from "./Searchbar/Searchbar";
import { MemberlistHeader, MemberListHeaderLineItems, MemberListHeaderLineItem, MemberlistHeaderItemEmpty } from "./Styled/MemberList";

const Component = styled.div`
    width: auto;
    height: auto;
    padding: 0.25rem;
`

const Entries = styled.div`
    padding: 0.25rem;
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
                    <MemberlistHeader>
                        <MemberListHeaderLineItems>
                            <MemberListHeaderLineItem onClick={() => handleSort("naam")}>Naam</MemberListHeaderLineItem>
                            <MemberListHeaderLineItem onClick={() => handleSort("email")}>Email</MemberListHeaderLineItem>
                            <MemberListHeaderLineItem onClick={() => handleSort("visit")}>Laatste bezoek</MemberListHeaderLineItem>
                            <MemberlistHeaderItemEmpty />
                        </MemberListHeaderLineItems>
                    </MemberlistHeader>

                    <MemberListItems data={search.length > 0 ? result : items} />
                </Entries>
            </Component>
            {children}
        </>
    );
}

export default MemberList;