
import classes from './TaskList.module.css';
import Item from './Item/Item';
import Panel from '../../../components/uielements/Panel';
function TaskList(props) {

  
 return (
   <div>
      {getList().map(
          (item)=>{
              return <Panel><Item item={item} key={item.id} /></Panel>
          }
        )}
   </div>
   
 );
 
function getList(){
  let myData=props.list;
  //
  /* let stringData=JSON.stringify(myData);
  //console.log(myData.);
  let myTestData = JSON.parse(stringData,JSON.dateParser); 
  console.log(myTestData);
  myData.forEach((elem)=>{
    console.log(elem);
  }) */
  
  return myData;

}
  
}

export default TaskList;