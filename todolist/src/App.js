import './App.css';
import { AddItem } from './components/AddItem';
import { Header } from './components/Header';
import { PinnedItem } from './components/PinnedItem';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddItem />
        <PinnedItem />
        <TaskList number={5} />
      </div>
    </div>
  );
}

export default App;
