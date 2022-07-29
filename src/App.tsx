import React, { FC } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
