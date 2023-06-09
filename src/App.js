import React,{ useState } from "react";
import DisplayEntries from './components/DisplayEntries/DisplayEntries';
import AddEntryForm from "./components/AddEntry/AddEntryform";

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'},{weight: 176, date: '11-24-2021'}])

function addNewEntry(entry){
  let tempEntries = [entry, ...entries]

  setEntries(tempEntries)
}

  return (
    <div>
      <DisplayEntries parentEntries = {entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
