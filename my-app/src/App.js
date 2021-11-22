import PageEditTask from './pages/PageEditTask';
import PageNewProject from './pages/PageNewProject';
import PageTasksTree from './pages/PageTasksTree';
import PageProjectList from './pages/PageProjectList';
import NaviBar from './layouts/NavBar/NaviBar';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      <Routes>
        <Route exact path='/' element={<PageProjectList/>}/>
        <Route exact path='/project/add' element={<PageNewProject/>}/>
        <Route exact path='/edit' element={<PageEditTask/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
