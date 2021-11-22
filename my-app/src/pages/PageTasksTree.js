import TaskList from '../layouts/PageTaskList/List/TaskList';

const TASK_DATA=[
  {
    id:1,
    name:"Task 1",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date('2011-04-11T10:20:30Z').toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],
    tasks_ids_after:[],    
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[],

    //some more related objects
  },
  {
    id:2,
    name:"Task 2",
    users:[], //отвественные - они же исполнители
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],
    tasks_ids_after:[],    
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
  {
    id:3,
    name:"Task 3",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],   
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
  {
    id:4,
    name:"Task 4",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],   
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
  {
    id:5,
    name:"Task 5",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],   
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
  {
    id:6,
    name:"Task 6",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],   
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
  {
    id:7,
    name:"Task 7",
    users:[], //отвественные - они же исполнители
    editors:[],
    shotdesc:"Description of this task its main target/goal etc.",
    date_to_start:new Date().toJSON(),
    date_real_start:null,
    date_to_fin:new Date().toJSON(),
    date_real_fin:null,
    tasks_ids_before:[],    
    state_inprogress:false,
    progress_manual:0,//0-100
    spend_periods:[]
    //some more related objects
  },
];


 
function PageTaskList(props) { 
 return (
  <div className="tasks">
     <h1>Задания</h1>
     <p>
      Список всех заданий.
     </p>
      <TaskList list={TASK_DATA} />


      
   </div>
 );
  
}

export default PageTaskList;