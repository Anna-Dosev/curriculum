import './App.css';
import Nav from './components/Nav'
import navData from './mocks/navData.json';

function App() {
 return <Nav navbar={navData}/>
}

export default App; 
