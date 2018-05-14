export const ADD_TASKS = 'ADD_TASKS';
export function updateTodoTasks (info) {
    return {
        type: ADD_TASKS,
        info
    }
}

export const DELETE_TASKS = 'DELETE_TASKS';
export function deleteTodoTasks (info) {
    return {
        type: DELETE_TASKS,
        info
    }
}

export const FILTER_TASKS = 'FILTER_TASKS';
export function filterTasks(filter) {
    return {
        type: FILTER_TASKS,
        filter
    }
}