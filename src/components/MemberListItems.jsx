import React from "react";
import styled from 'styled-components';

const LineHeader = styled.div`
    width: auto;
    padding: 0.075rem;

    @media (max-width: 850px) {
        padding: 0;
    }
`

const LineItems = styled.div`
    background: #F2F2F2;
    border: 1px solid #D2D2D2;
    width: auto;
    heigth: 50rem;
`

const LineItem = styled.div`

    display: inline-flex;
    width: 24%;
    heigth: auto;
    padding: 0.25rem;
    
    @media (max-width: 850px) {
        overflow-wrap: anywhere;
        width: 23%;
    }

    @media (max-width: 500px) {
        overflow-wrap: anywhere;
        width: 22%;
    }
`

const Button = styled.button`
    display: inline-flex;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    border: 1px solid #D90000;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    @media (max-width: 850px) {
        overflow: hidden;
    }

    @media (max-width: 700px) {
        overflow: hidden;
        width: 50%;
        font-size: 70%;
    }

    @media (max-width: 550px) {
        overflow: hidden;
        padding: 0;
        width: 50%;
        font-size: 60%;
    }

    @media (max-width: 500px) {
        padding: 0;
        overflow-wrap: anywhere;
    }
`

function MemberListItems({ data }) {
    return data.map((data, index) => {
        data = data.item === undefined ? data : data.item;

        return (
            <LineHeader key={index}>
                <LineItems>
                    <LineItem>{data.naam}</LineItem>
                    <LineItem>{data.email}</LineItem>
                    <LineItem>{data.lastVisit}</LineItem>
                    <LineItem><Button className="button">Verander rol</Button><Button>Verwijder</Button></LineItem>
                </LineItems>
            </LineHeader>
        )
    })
}

export default MemberListItems;