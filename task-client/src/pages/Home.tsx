import { useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonPage,
  IonFab,
  IonIcon,
  IonFabButton,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { showPrompt } from '../hooks/useDialog';
import TaskContext, { Task } from '../contexts/TaskContext';
import TaskList from '../components/TaskList';



const Home: React.FC = () => {
  let { createTask } = useContext(TaskContext);

  const handleCreateTask = async () => {
    await createTask(await showPrompt("title", "message"));
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={handleCreateTask}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <TaskList/>
      </IonContent>

    </IonPage>
  )
};

export default Home;

