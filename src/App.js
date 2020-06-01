import React from 'react';
import './App.css';
import ChartBar from './component/ChartBar/ChartBar';
import ChartBie from './component/ChartBie/ChartBie';


function App() {
  return (
    <div className="container">
     <div className="row">
     <div className="col-6">
        <div className="w-75">
        <ChartBar />
        </div>
      </div>
      <div className="col-6">
        <ChartBie />
        </div>
     </div>
    </div>
  );
}

export default App;
