import { combineReducers } from 'redux'
import { ADD_TASKS, DELETE_TASKS, FILTER_TASKS } from './state'

let initData = [];

function allTasks (state = initData, action) {
    switch (action.type) {
        case ADD_TASKS:
            return [
                ...state,
                {
                    text: action.info.text,
                    templated: action.info.templated
                }
            ]
            break;
        case DELETE_TASKS:
            return [
                ...state.slice(0, action.info.index),
                {
                    text: action.info.text,
                    templated: !state[action.info.index].templated
                },
                ...state.slice(action.info.index+1)
            ];
            break;
        default :
            return state;
    }
}

export default combineReducers({
    allTasks
})