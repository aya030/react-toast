import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

const notify = () => toast('toastがでます！');

const App = () => {
  return (
    <div>
      <button onClick={notify}>PUSH！！！</button>
      <Toaster
        toastOptions={{
          duration: 4000,
          position: 'bottom-center',
          style: {
            border: '1px solid #734E30',
            padding: '16px',
            color: '#734E30',
          },
        }}
      />
    </div>
  );
};

export default App;
