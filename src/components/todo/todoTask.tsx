import React from 'react';

export interface ITodoTask {
    title: string;
    taskId: string;
    completed: boolean;
}

interface ITodoTaskView extends ITodoTask {
    toggleTask: ({taskId, isComplete}: {taskId: string, isComplete: boolean}) => void;
    removeTask: ({taskId}: {taskId: string}) => void;
}

export const TodoTaskView = ({
    title,
    removeTask,
    completed,
    taskId,
    toggleTask,
}: ITodoTaskView) => {
    const incompleteTask = () => toggleTask({taskId, isComplete: false});
    const completeTask = () => toggleTask({taskId, isComplete: true});
    const onRemoveTask = () => removeTask({taskId});
    return (
        <li className="is-12">
            <div className="columns is-12 is-flex">
                <div className="column flex-grow-1">
                    <label className={"checkbox has-text-light".concat(completed ? " has-text-grey" : "")}>
                        <input type="checkbox" checked={completed} className="mr-2" onChange={completed ? incompleteTask : completeTask} />
                        {title}
                    </label>
                </div>
                <div className="column is-flex-grow-0">
                    <button className="delete" onClick={onRemoveTask} />
                </div>
            </div>
        </li>
    );
}
