import React, {useState} from 'react';
import Headline from "../components/Headline";
import styled from 'styled-components/macro'

export default function Home() {

    const [allTodo, setAllTodo] = useState({});
    return (
        <WrapperStyled>
            <Headline title={"OPEN"}/>
            <Headline title={"IN PROGRESS"}/>
            <Headline title={"DONE"}/>
        </WrapperStyled>
    )
}

const WrapperStyled = styled.div`
display: flex;
justify-content: space-around;
`


