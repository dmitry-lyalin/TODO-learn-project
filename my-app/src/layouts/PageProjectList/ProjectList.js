import Item from './Project'

function ProjectList(props)
{
    return(<div>{
        props.list.map((item)=>{
            return <Item item={item} key={item.id}/>
        })}
    </div>);
}

export default ProjectList;