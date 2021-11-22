function Item(props){
    let {id,name,users,tasks,date_finish,date_start} = props.item;
     

    return (<p>{name}</p>);
}
export default Item;