import React, { Component } from 'react'
import $http from '../../utils/http'
import { connect } from 'react-redux'
import { updateTodoTasks } from '../../Redux/state'

class TodoList extends Component {
    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.addTasksBundle.bind(this)}/>
                <button>添加任务</button>
            </div>
        )
    }
    // 添加任务事件
    addTasksBundle(e) {
        let val = e.target.value;
        if (e.keyCode == 13 && val != '') {
            $http.post('/todoList/addTasks', {
                text: e.target.value
            })
            .then(res => {
                this.props.addTasks({text: val, templated: false})
            })
            e.target.value = '';
        }
    }
}

function dispatchProps (dispatch) {
    return {
        addTasks(val) {
            dispatch(updateTodoTasks(val))
        }
    }
}

export default connect(null, dispatchProps)(TodoList);