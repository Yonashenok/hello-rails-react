import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messages/messageSlice';

function Greeting() {
  const { greeting } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>This is greeting from API</h2>
      <button type="button" onClick={() => dispatch(fetchMessage())}>
        get random greeting
      </button>
      <h1>{greeting.greeting}</h1>
    </div>
  );
}

export default Greeting;
