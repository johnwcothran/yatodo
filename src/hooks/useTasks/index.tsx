import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodoTask } from '../../components/todo/todoTask';

export interface ITasks {
    [key: string]: ITodoTask
};

export const useTasks = () => {
    const initialTasks = {
        task1: {
            title: 'Sample Task 1'
        }
    }
    const [tasks, setTasks] = useState<ITasks>({});
    const [addTaskInput, setAddTaskInput] = useState<string>("")
    const toggleTask = useCallback(() => ({taskId, isComplete}: {taskId: string, isComplete: boolean}) => {
        setTasks({
            ...tasks,
            [taskId]: {
                ...tasks[taskId],
                completed: isComplete
            }
        });
    }, [])
    const removeTask = useCallback(({taskId}: {taskId: string}) => {
        const newTaskIds = Object.keys(tasks).filter(tId => tId !== taskId)
        setTasks(newTaskIds.reduce((previousValue, currentValue) => (
            {...previousValue, [currentValue]: tasks[currentValue]}
        ), {}))
    }, []);
    const addTask = useCallback((e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const taskId = uuidv4();
        
        setTasks({
            ...tasks,
            [taskId]: {
                title: addTaskInput,
                taskId,
                completed: false,
            }
        })
        setAddTaskInput("")
    }, []);
    const updateAddTaskInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setAddTaskInput(e.target.value)
    }, []);
    
    return {
        tasks,
        addTaskInput,
        updateAddTaskInput,
        addTask,
        toggleTask,
        removeTask,
        setAddTaskInput
    }
}