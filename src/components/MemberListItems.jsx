import React from "react";
import styled from 'styled-components';

const Line = styled.div`
    margin-top: 0.15rem;
    background: #F2F2F2;
    border-radius: 0.1rem;
    border: 1px solid #D2D2D2;
    padding: 0.25rem;
    width: auto;
    `
    
const LineItem = styled.div`
    border: 1px solid black;
    display: inline-flex; 
    width: 25%;
`

const LineItemButtons = styled.div`
    display: inline-flex; 
    width: 10%;
`

const Button = styled.button`
    display: inline-flex;
    margin-right: 0.5rem;
    border: 1px solid #D90000;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
`

function MemberListItems({ data }) {
    return data.map((data, index) => {
        data = data.item === undefined ? data : data.item;

        return(
            <Line key={index}>
                {/* <div style={{ display: "inline-flex", width: "80%" }}> */}
                    <LineItem>{data.naam}</LineItem>
                    <LineItem>{data.email}</LineItem>
                    <LineItem>{data.lastVisit}</LineItem>
                {/* </div>
                <div style={{ display: "inline-flex", width: "15%"}}> */}
                    <LineItemButtons><Button>Verander rol</Button></LineItemButtons>
                    <LineItemButtons><Button>X</Button></LineItemButtons>
                {/* </div> */}
            </Line>
        )
    })
  }
  
  export default MemberListItems;