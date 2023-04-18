import {
  IonCheckbox,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader
} from '@ionic/react';
import { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';
import { trash } from 'ionicons/icons';
import './TaskList.css'



const TaskList: React.FC = () => {
  let { deleteTask, updateTask } = useContext(TaskContext);
  const { tasks } = useContext(TaskContext);
  
  const taskComplete = (task: any) => {
    updateTask(task.id, {
      title: task.title, completed: true,
      id: task.id
    })
  };
    
  const taskIncomplete = (task: any) => {
    updateTask(task.id, {
      title: task.title, completed: false,
      id: task.id
    })
  };

  const slideToDelete = (id: any) => {
    deleteTask(id)
  };

  return (
    <div>
      <div>
        <TaskContext.Consumer>
          {({ tasks }) => {
            return (
              <IonList>
                <IonListHeader color="one">
                  <IonLabel color="light" className="ion-margin">
                    Incomplete
                  </IonLabel>
                </IonListHeader>
                {tasks.map((task: any) => {
                  if (task.completed === false) {
                    return (
                      <IonItemSliding key={task.id}>
                        <IonItem>
                          <IonLabel>{task.title}</IonLabel>
                          <IonCheckbox
                            onIonChange={() => taskComplete(task)}
                            slot="start"
                          ></IonCheckbox>
                        </IonItem>
                        <IonItemOptions side="end">
                          <IonItemOption
                            onClick={() => slideToDelete(task.id)}
                            color="danger"
                          >
                            <IonIcon slot="icon-only" icon={trash}></IonIcon>
                          </IonItemOption>
                        </IonItemOptions>
                      </IonItemSliding>
                    );
                  }
                })}
              </IonList>
            );
          }}
        </TaskContext.Consumer>
      </div>
      <div>
        <TaskContext.Consumer>
          {({ tasks }) => {
            return (
              <IonList>
                <IonListHeader color="two">
                  <IonLabel className="ion-margin">
                    Complete
                  </IonLabel>
                </IonListHeader>
                {tasks.map((task: any) => {
                  if (task.completed === true) {
                    return (
                      <IonItemSliding>
                        <IonItem>
                          <IonLabel>{task.title}</IonLabel>
                          <IonCheckbox
                            onIonChange={() => taskIncomplete(task)}
                            checked={true}
                            slot="start"
                          ></IonCheckbox>
                        </IonItem>
                        <IonItemOptions side="end">
                          <IonItemOption
                            onClick={() => slideToDelete(task.id)}
                            color="danger"
                          >
                            <IonIcon slot="icon-only" icon={trash}></IonIcon>
                          </IonItemOption>
                        </IonItemOptions>
                      </IonItemSliding>
                    );
                  }
                })}
              </IonList>
            );
          }}
        </TaskContext.Consumer>
      </div>
    </div>
  );
};

export default TaskList;

