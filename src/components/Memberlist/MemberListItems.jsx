import React from "react";
import { Button } from "../Styled/Components";
import { MemberlistLineHeader, MemberListLineItems, MemberListLineItem } from "../Styled/MemberList";



const MemberListItems = ({ data, message }) => {
    if (message) {
        return (
            <MemberlistLineHeader key={"1"}>
                <MemberListLineItems>
                    <MemberListLineItem>{message}</MemberListLineItem>
                </MemberListLineItems>
            </MemberlistLineHeader>
        )
    }

    return data.map((data, index) => {
        data = data.item === undefined ? data : data.item;

        return (
            <MemberlistLineHeader key={index}>
                <MemberListLineItems>
                    <MemberListLineItem>{data.name}</MemberListLineItem>
                    <MemberListLineItem>{data.email}</MemberListLineItem>
                    <MemberListLineItem>{data.lastLogin ?? <i><u>Nog nooit ingelogd</u></i>}</MemberListLineItem>
                    <MemberListLineItem><Button className="button">Verander rol</Button><Button>Verwijder</Button></MemberListLineItem>
                </MemberListLineItems>
            </MemberlistLineHeader>
        )

    })
}

export default MemberListItems;