import './App.css';
import { AddItem } from './components/AddItem';
import { Header } from './components/Header';
import { PinnedItems } from './components/PinnedItems';
import { TaskList } from './components/TaskList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddItem />
        <PinnedItems />
        <TaskList number={5} />
      </div>
    </GlobalProvider >
  );
}

export default App;
