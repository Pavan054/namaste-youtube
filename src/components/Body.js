import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <aside class="self-start sticky top-16 col-span-1"><Sidebar /></aside>
      <Outlet />
    </div>
  );
};

export default Body;
