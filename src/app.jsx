import React, { Component } from 'react'

import TodoList from './Views/TodoList'
import TodoItem from './Views/TodoItem'

class App extends Component {
    render() {
        return (
            <div id='todo'>
                <TodoItem />
                <TodoList />
            </div>
        )
    }
}

export default App;