import React from 'react';
import Home from './pages/Home'
import ActionArea from './components/ActionArea'
import styled from "styled-components/macro";
import useTodo from "./hooks/useTodo";



function App() {

    const {allTodo, addTodo, advance, deleteTodo} = useTodo();

    return (
        <AppWrapper>
            <Home todos={allTodo} advance={advance} deleteTodo={deleteTodo}/>
            <ActionArea addTodo={addTodo}/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`

export default App;


