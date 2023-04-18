import React from "react";


export interface Task {
    id: number;
    title: string;
    completed: boolean;
  };

interface TaskContext {
    tasks: Task[];
    createTask: (task: string) => void;
    updateTask: (taskId: number, task: Task) => void;
    deleteTask: (taskId: number) => void;

};

const TaskContext = React.createContext<TaskContext>({
    tasks: [],
    createTask: (task: string) => {},
    updateTask: (taskId: number, task: Task) => {},
    deleteTask: (taskId: number) => {},

});

export default TaskContext;