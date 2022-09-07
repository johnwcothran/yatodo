import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { ITodoTask, TodoTaskView } from './todoTask';



interface ITodoList {
    tasks: {
        [key: string]: ITodoTask
    }
}

export const TodoListView = ({
    tasks
}: ITodoList) => {
    return <ul>
        {Object.keys(tasks).map(taskId =>
            <TodoTaskView key={taskId} {...tasks[taskId]} />)}
    </ul>
}

export const TodoList = () => {
    const { tasks } = useTasks();
    return <TodoListView tasks={tasks} />
}
