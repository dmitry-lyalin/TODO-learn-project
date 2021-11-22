import {Link} from 'react-router-dom';
import classes from './Item.module.css';

function Item(props) {
  let {id,name,shotdesc,date_to_start,date_to_fin,users,date_real_start,date_real_fin,tasks_ids_before,tasks_ids_after} = props.item;
    
 return (
   
   <div className={classes.task}> 
      <h2> #{id} {name} </h2>  
      <p>{shotdesc}</p>
      <p>{date_to_start}</p>
    </div>
 );
 
  
}

export default Item;