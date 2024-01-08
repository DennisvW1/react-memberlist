import React from "react";
import { Button } from "./Styled/Components";
import { MemberlistLineHeader, MemberListLineItems, MemberListLineItem } from "./Styled/MemberList";

type Items = {
    items: [
        id: number,
        name: string,
        email: string,
        lastLogin: string
    ]
} | {
    items: (string | number)[]
}

const MemberListItems = ({ items }: Items)  => {
    return items.map((item: any, index: number) => (
        <MemberlistLineHeader key={index}>
            <MemberListLineItems>
                <MemberListLineItem>{item.name}</MemberListLineItem>
                <MemberListLineItem>{item.email}</MemberListLineItem>
                <MemberListLineItem>{item.lastLogin}</MemberListLineItem>
                <MemberListLineItem><Button className="button">Verander rol</Button><Button>Verwijder</Button></MemberListLineItem>
            </MemberListLineItems>
        </MemberlistLineHeader>
    ))
}

export default MemberListItems;