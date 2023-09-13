import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import './Darkmode.css'
import './App.css';

function App() {
  return (
    <>
    <div className='row'>
    <div className='col'>
      <Leftsection/>
    </div>
    <div className='col-8 px-4 center  min-vh-100' style={ localStorage.getItem('theme')==='dark' ? { backgroundColor:'#120340'} : {backgroundColor : 'gray'} } >
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