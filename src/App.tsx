import React from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement, incrementByAmount, setAmountZero } from './redux/slices/exampleSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.example.value);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Toolkit & Material UI Example</h1>
      <div>
        <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>
          Decrement
        </Button>
        <Button variant="contained" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </Button>
        <Button variant="contained" color='error' onClick={() => dispatch(setAmountZero())} className='!ml-10px'>
          Set TO 0
        </Button>
      </div>
      <TextField
        label="Current Value"
        value={value}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default App;
