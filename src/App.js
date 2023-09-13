import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import './App.css';

function App() {
  return (
    <div className='row'>
    <div className='col-2'>
      <Leftsection/>
    </div>
    <div className='col-7'>
    <CenterSection/>
    </div>
    <div className='col-2'>
      <Leftsection/>
    </div>
    </div>
  );
}

export default App;
