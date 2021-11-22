import { useRef } from 'react';

function ProjectAdd(props)
{
    const nameRef = useRef();
    function addNewProject(e)
    {
        e.preventDefault();
        console.log(newProject);
       // console.log(nameRef.current.value)
       props.EmitNewProject(newProject)
    }

    let newProject={
        name:'',
        date_finish:'',
        date_start:''
    }
    function changeDateStart(e)
    {
        console.log('changeDateStart::');
        console.log(e);
        newProject.date_start=e.target.value;
    }

    function changeDateFinish(e)
    {
        console.log('changeDateFinish::');
        console.log(e);
        newProject.date_finish=e.target.value;
    }

    function changeName(e)
    {
        console.log('changeName::');
        console.log(e);
        newProject.name=e.target.value;
    }
    return (
        <div>
            <form onSubmit={addNewProject}>
                <div className="input-group">
                    <label for="name">Название</label>
                    <input ref={nameRef} onChange={changeName} type="text" id="name"></input>
                </div>
                <div className="input-group">
                    <label for="date_start">Запуск</label>
                    <input type="datetime-local" onChange={changeDateStart} id="date_start"/>
                </div>
                <div className="input-group">
                    <label for="date_finish">Финал</label>
                    <input type="datetime-local" onChange={changeDateFinish}  id="date_finish"/>
                </div>

                <button>Добавить</button>
            </form>
        </div>
    );
}

export default ProjectAdd;