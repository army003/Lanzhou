import './App.css';
import 'twin.macro';
import 'twin.macro';

import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { control } = useForm({});
  return (
    <div>
      <h1 tw='text-warning bg-primary'>Hello</h1>
    </div>
  );
}

export default App;
