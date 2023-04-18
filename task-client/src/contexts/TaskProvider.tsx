import axios from "axios";
import { useEffect, useState } from "react";
import TaskContext, { Task } from "./TaskContext";



export const TaskProvider = (props:any) => {
    const [ task, setTask ] = useState<Task[]>([]);
    const baseUrl = "http://localhost:3000/tasks/";

    useEffect(() => {
        getTasks()
    }, []);
    
    function getTasks() {
        return axios.get(baseUrl).then(response => {
            console.log(response.data)
            setTask(response.data as Task[])
        });
    }

    function createTask(task: string) {

        return axios.post(baseUrl, {title: task, completed: false}, { })
            .then(response => {
                    getTasks();
                    return new Promise(resolve => resolve(response.data));
                }
            );
    }

    function updateTask(taskId: number, task: Task) {{
            return axios.put(baseUrl + "task/" + taskId, task, { })
                .then(response => {
                    getTasks();
                    return new Promise(resolve => resolve(response.data));
                });
        }
    }

    function deleteTask(taskId:any) {
            return axios.delete(baseUrl + "task/" + taskId, { })
                .then(response => {
                    getTasks();
                    return new Promise(resolve => resolve(response.data));
                })
    }

    return (
        <TaskContext.Provider value={{
            tasks: task,
            createTask,
            updateTask,
            deleteTask
        }}>
            { props.children }
        </TaskContext.Provider>
    )
};