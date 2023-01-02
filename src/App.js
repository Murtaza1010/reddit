import './App.css';
import SideNav from './components/sidebar/SideNav';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
