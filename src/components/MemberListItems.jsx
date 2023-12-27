import React from "react";
import { Button } from "./Styled/Components";
import { MemberlistLineHeader, MemberListLineItems, MemberListLineItem } from "./Styled/MemberList";

function MemberListItems({ data }) {
    return data.map((data, index) => {
        data = data.item === undefined ? data : data.item;

        return (
            <MemberlistLineHeader key={index}>
                <MemberListLineItems>
                    <MemberListLineItem>{data.naam}</MemberListLineItem>
                    <MemberListLineItem>{data.email}</MemberListLineItem>
                    <MemberListLineItem>{data.lastVisit}</MemberListLineItem>
                    <MemberListLineItem><Button className="button">Verander rol</Button><Button>Verwijder</Button></MemberListLineItem>
                </MemberListLineItems>
            </MemberlistLineHeader>
        )
    })
}

export default MemberListItems;