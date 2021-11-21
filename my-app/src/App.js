import PageEditTask from './pages/PageEditTask';
import PageNewTask from './pages/PageNewTask';
import PageTasksTree from './pages/PageTasksTree';
import NaviBar from './layouts/NavBar/NaviBar';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      <Routes>
        <Route exact path='/' element={<PageTasksTree/>}/>
        <Route exact path='/add' element={<PageNewTask/>}/>
        <Route exact path='/edit' element={<PageEditTask/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
