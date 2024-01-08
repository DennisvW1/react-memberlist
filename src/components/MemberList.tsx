import React, { useState, useEffect, ReactNode } from "react";
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

type Props = {
    data: [
        id: number,
        name: string,
        email: string,
        lastLogin: string
    ],
    children: ReactNode;
}

const MemberList = ({ data, children }: Props) => {
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

    type sortTypes = {
        [key: string]: string
    }
    const handleSort = (type: string) => {
        const types: sortTypes = {
            naam: "naam",
            email: "email",
            visit: "lastVisit"
        }

        const sortArray = items;
        const sortProperty: string = types[type];
        let sort;
        let updatedSortOrder;

        if (sortOrder[type as keyof typeof sortOrder] ) {
            sort = sortArray.sort((a: any, b: any) => (a[sortProperty] > b[sortProperty]) ? 1 : -1);
        } else {
            sort = sortArray.sort((a: any, b: any) => (b[sortProperty] > a[sortProperty]) ? 1 : -1);
        }

        updatedSortOrder = { ...sortOrder, [type]: !sortOrder[type as keyof typeof sortOrder] }

        setSortOrder(updatedSortOrder)

        setItems(sort);
    }

    const handleInputChange = (value: any) => {
        setSearch(value);
    }

    const fuse = new Fuse(items, fuseOptions);
    const result = fuse.search(search).map(({ item }) => item);
    
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

                    <MemberListItems items={search.length > 0 ? result : items} />
                </Entries>
            </Component>
            {children}
        </>
    );
}

export default MemberList;