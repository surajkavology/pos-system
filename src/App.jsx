import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OrderView from './pages/OrderView';
import ManageItems from './pages/ManageItems';
import Settings from './pages/Settings'
import Notification from './pages/Notification'
import LogOut from './pages/LogOut';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-view" element={<OrderView />} />
        <Route path='manage-items' element={<ManageItems/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='notifications' element={<Notification/>}/>
        <Route path='logout' element={<LogOut/>}/>
      </Routes>
    </div>
  );
}

export default App;
