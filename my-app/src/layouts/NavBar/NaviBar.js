import {Link} from 'react-router-dom';
import classes from './NaviBar.module.css';
function LayoutNaviBar(props) {
 return (
   <div className="navi-bar">
     <div className="logo">ТУДУШНИК</div>
      <ul className={classes.list}>
       <li><Link to='/'>List</Link></li>
       <li><Link to='/project/add'>Add Project</Link></li>
      </ul>
   </div>
 );
 
  
}

export default LayoutNaviBar;