function Popup(props) {
 return (
   <div className="popup">
     <header className="App-header">
      <p>Pop-up?</p>
      <button  onClick={props.onClick}>Cancel</button>
      <button>Ok</button>
     </header>
   </div>
 );
 
  
}

export default Popup;