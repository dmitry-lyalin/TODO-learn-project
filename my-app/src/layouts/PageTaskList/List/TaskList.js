
import classes from './TaskList.module.css';
import Item from './Item/Item';
function TaskList(props) {
 return (
   <div>
      {
        getList().map(
          (item)=>{
              return <Item item={item} />
          }
        )

      }
   </div>
   
 );
 
function getList(){return props.list;}
  
}

export default TaskList;