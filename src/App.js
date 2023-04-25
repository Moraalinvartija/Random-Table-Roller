import React from 'react';
import Tabs from "./components/Tabs";
import Table from "./components/Table";
import data1 from './JSON/Table1';
import data2 from './JSON/Table2';
import data3 from './JSON/Table3';
import data4 from './JSON/Table4';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Random Tables for D&D</h1>
      <Tabs>
        <div label="Gem Table">
        <Table data={data1} />
        </div>
        <div label="Example2">
        <Table data={data2} />
        </div>
        <div label="Example3">
        <Table data={data3} />
        </div>
        <div label="Example4">
        <Table data={data4} />
        </div>
      </Tabs>
    </div>
  );
}

export default App;