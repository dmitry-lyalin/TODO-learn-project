import ProjectAdd from "../layouts/PageProjectList/ProjectAdd"
import Panel from '../components/uielements/Panel'
import {useNavigate} from 'react-router-dom';
function PageNewProject()
{
    const router =useNavigate();
    function reqAddNewProject(data)
    {
        console.log('reqAddNewProject');
        console.log(data);
        router('/');
    }
    return (<div>
        <Panel>
            <h1>Новый проект</h1>
            <ProjectAdd EmitNewProject={reqAddNewProject}/>
        </Panel>
    </div>)
}
export default PageNewProject;