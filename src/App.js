import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import './App.css';

function App() {
  return (
    <div className='row'>
    <div className='col-2'>
      <Leftsection/>
    </div>
    <div className='col-8 bg-light'>
    <CenterSection/>
    </div>
    <div className='col-2'>
      <RightSection/>
    </div>
    </div>
  );
}

export default App;
