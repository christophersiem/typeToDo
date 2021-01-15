import React from 'react';
import styled from "styled-components";

export interface HeadlineProps {
    title: string
}

export default function Headline({title}: HeadlineProps) {
    const changeTitle=(title: string)=>{
        switch(title){
            case "OPEN": return "Open";
            case "IN_PROGRESS": return "In Progress";
            case "DONE": return "Done"
        }
    }
    return (
            <HeadlineStyled>{changeTitle(title)}</HeadlineStyled>
    )
}

const HeadlineStyled = styled.h1`
text-align: center;
`
