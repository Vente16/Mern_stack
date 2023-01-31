/* eslint-disable */
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';

function App() {
  return (
    <div className="conw-full min-h-full md:grid grid-rows-auto-span grid-cols-1 bg-[#E7E9F2] text-sm pt-16 lg:pb-0tainer">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
