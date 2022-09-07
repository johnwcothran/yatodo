import React from 'react';
import { ITasks, useTasks } from '../../hooks/useTasks';
import { TodoTaskView } from './todoTask';

interface ITodoList {
    tasks: ITasks;
    addTaskInput: string;
    updateAddTaskInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addTask: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    toggleTask: ({taskId, isComplete}: {taskId: string, isComplete: boolean}) => void;
    removeTask: ({taskId}: {taskId: string}) => void;
}

export const TodoListView = ({
    tasks,
    addTaskInput,
    updateAddTaskInput,
    addTask,
    toggleTask,
    removeTask
}: ITodoList) => {
    return (
        <div>
            <ul>
                {Object.keys(tasks).map(taskId =>
                    <TodoTaskView
                        key={taskId}
                        toggleTask={toggleTask}
                        removeTask={removeTask}
                        {...tasks[taskId]} />)}
            </ul>
            <form onSubmit={addTask} className="is-flex  mt-2 is-align-items-center">
                <input
                    className="input mr-2"
                    type='text'
                    placeholder='Add task...'
                    onChange={updateAddTaskInput}
                    value={addTaskInput} />
                <button className="button" onClick={addTask}>Add Task</button>
            </form>
        </div>
    );
}

export const TodoList = () => {
    const useTasksProps = useTasks();
    return (
        <TodoListView
            {...useTasksProps} />
    );
}
