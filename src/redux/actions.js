export const SET_TASKS = 'SET_TASKS';
export const SET_TASK_ID = 'SET_TASK_ID';

export const setTasks = tasks=> dispatch =>{
    dispatch({
        type: SET_TASKS,
        payload: tasks,
    })
};

export const setTasksID = tasksID=> dispatch =>{
    dispatch({
        type: SET_TASK_ID,
        payload: tasksID,
    })
};

