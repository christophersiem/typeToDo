import React, {useState} from 'react';
import Home from './pages/Home'
import './App.css';
import Footer from './components/Footer'
import {Todo} from "./models/Settings";

const initialState: Todo[] =
    [{
        title: "do homework",
        status: "OPEN",
    }, {
        title: "learn typescript",
        status: "IN_PROGRESS",
    }, {
        title: "drink beer",
        status: "DONE",
    }]

function App() {

    const [allTodo, setAllTodo] = useState(initialState);
    console.log(allTodo)

    return (
        <div className="App">
            <Home todos={allTodo}/>
            <Footer allTodo={allTodo} setAllTodo={setAllTodo}/>
        </div>
    );
}

export default App;
