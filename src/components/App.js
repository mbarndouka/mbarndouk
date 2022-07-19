import './App.css';
import Sidebar from './sidebar/sidebar';
import Maindash from './mainDash/maindash';
function App() {
  return (
    <div className='App'>
     <div className='AppGlass'>
      <Sidebar/>
      <Maindash />
     </div>
    </div>
  );
}

export default App;