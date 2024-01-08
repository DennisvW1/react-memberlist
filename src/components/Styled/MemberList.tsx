import styled from 'styled-components';

export const MemberlistLineHeader = styled.div`
    width: auto;
    padding: 0.075rem;

    @media (max-width: 850px) {
        padding: 0;
    }
`

export const MemberlistHeader = styled(MemberlistLineHeader)`
    border: 1px solid #D90000;
    background: #D90000;
    color: #fff;
`

export const MemberListHeaderLineItems = styled.div`
    width: auto;
`

export const MemberListLineItems = styled(MemberListHeaderLineItems)`
    background: #F2F2F2;
    border: 1px solid #D2D2D2;
`

export const MemberListLineItem = styled.div`
    display: inline-flex;
    width: 24%;
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

export const MemberListHeaderLineItem = styled(MemberListLineItem)`
    &:hover {
        cursor: pointer;
    }
`

export const MemberlistHeaderItemEmpty = styled.div`
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