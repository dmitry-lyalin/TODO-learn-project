import ProjectList from "../layouts/PageProjectList/ProjectList";
import {Link} from 'react-router-dom';
const PROJECT_DATA=[
    {
        id:1,
        name:'Project 1',
        users:[],
        tasks:[],
        date_start:null,
        date_finish:null
    },
    {
        id:2,
        name:'Project 2',
        users:[],
        tasks:[],
        date_start:null,
        date_finish:null
    }
]
function PageProjectList()
{
    return (<div>
        <h1>Проекты</h1>
        <div>
 
            <ProjectList list={PROJECT_DATA}/>
        </div>
        <Link to="/project/add"><button >Add Project</button></Link>
    </div>);
}
export default PageProjectList;