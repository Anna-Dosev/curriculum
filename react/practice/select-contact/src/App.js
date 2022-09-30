import { useState } from 'react';
import Detail from './components/detail'
import List from './components/list';
import data from './mocks/data.json'
import './App.css';


function App() {
  const [selectedContact, setSelectedContact] = useState()
  const handleClick = e => {
    const id = e.target.id //e.target.dataset.someDataAttr, id is not an attr, so it can be grabbed directly
    const selected = data.find(x => x.id == id);
    setSelectedContact(selected)
  };

  return (
    <div className="container">
      <List action= {handleClick} data={data} />
      {selectedContact && <Detail selectedContact={selectedContact} />}
    </div>
  );
}

export default App;