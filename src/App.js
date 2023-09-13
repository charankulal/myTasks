import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import './Darkmode.css'
import './App.css';

function App() {
  
  return (
    <>
    <div className='row'>
    <div className='col' >
      <Leftsection/>
    </div>
    <div className='col-8 px-4 center  min-vh-100' data-theme="dark" >
    
    <CenterSection/>
     
     </div>
    
    <div className='col align-items-end'>
      <RightSection/>
    </div>
    </div>
    
    </>
  );
}

export default App;
// data-bs-theme={`${localStorage.getItem('theme')}`}
// style={ localStorage['theme']==='dark' ? { backgroundColor:'#120340'} : {backgroundColor : 'gray'} }
// style={{borderRight:"3px solid black"}}
// style={{borderLeft:"3px solid black"}}