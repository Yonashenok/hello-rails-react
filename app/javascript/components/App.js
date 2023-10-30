import React, { useEffect } from 'react';
import Greeting from './Greeting';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { fetchMessage } from '../redux/messages/messageSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Greeting />} />
      </Route>
    </Routes>
  );
}

export default App;
