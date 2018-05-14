import React, { Component } from 'react'
import { connect } from 'react-redux'
import $http from '../../utils/http'
import { updateTodoTasks, deleteTodoTasks } from '../../Redux/state'
import './todoitem.scss'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state={
            all:true,
            flag:true
        }
    }
    render() {
        let { allTasks } = this.props;
        return (
            <div id='todoitem'>
                <nav className="nav">
                    <span onClick={() => this.wait('all')}>全部任务</span>
                    <span onClick={() => this.wait('wait')}>待办任务</span>
                    <span onClick={() => this.wait('finished')}>已完成任务</span>
                </nav>
                <ul className="list">
                    {
                        this.state.all?allTasks.map((item, index) => {
                            return <li key={index}><b className={item.templated ? 'del' : ''}>{item.text}</b><span onClick={() => this.deleteTasks(index)}>删除</span></li>
                        }):allTasks.map((item, index) => {
                            return this.state.flag ? ( item.templated ? '' : <li key={index}><b className={item.templated ? 'del' : ''}>{item.text}</b><span onClick={() => this.deleteTasks(index)}>删除</span></li>) : (item.templated ? <li key={index}><b className={item.templated ? 'del' : ''}>{item.text}</b><span onClick={() => this.deleteTasks(index)}>删除</span></li> : '')
                        })
                    }
                </ul>
            </div>
        )
    }
    wait(task) {
        if(task=='all'){
            this.setState({
                all:true
            })
        }else{
            this.setState({
                all:false
            })
        }
        if(task=='wait'){
            this.setState({
                flag:true
            })
        }else{
            this.setState({
                flag:false
            })
        }
    }
    componentDidMount () {
        this.props.updateTodoTasks('all');
    }
    // 删除任务
    deleteTasks(index) {
        this.props.deleteTasks(index);
    }
}

function mapStateProps (state) {
    return {
        allTasks: state.allTasks
    }
}

function mapDispatchProps (dispatch) {
    return {
        updateTodoTasks (task) {
            $http.post('/todoList/getTasks', {})
            .then(res => {
                res.map(item => {
                    dispatch(updateTodoTasks(item))
                })
            })
        },
        deleteTasks(index) {
            $http.post('/todoList/deleteTasks', {
                index: index
            })
            .then(res => {
                if (res.code == 1) {
                    dispatch(deleteTodoTasks(res.info));
                } else {
                    console.log(res.info)
                }
            })
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(TodoItem);