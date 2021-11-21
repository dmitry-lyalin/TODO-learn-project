import Popup from './Popup'
import {useState} from 'react';

function Task(props) {
 const [modalIsOpen, setModalOpen] = useState(false);
 const [modalIsOpen2, setModalOpen2] = useState(false);
 return (
   <div className="card">
     
      <h1>{props.name}</h1>

      <p>Task content</p>
      <button onClick={editTask}>EDIT</button>
      {modalIsOpen ? <Popup /> :null}
      {modalIsOpen2 && <Popup onClick={closeAll} /> }
   </div>
 );
function closeAll()
{
  setModalOpen(false);
  setModalOpen2(false);
}
 
 function editTask(e)
 {
  console.log(e);
   setModalOpen(true);
   if(modalIsOpen)  setModalOpen2(true);
 }
  
}

export default Task;