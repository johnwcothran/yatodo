import React from 'react';

export interface ITodoTask {
    title: string
}

export const TodoTaskView = ({
    title
}: ITodoTask) => {
    return <li>{title}</li>
}
