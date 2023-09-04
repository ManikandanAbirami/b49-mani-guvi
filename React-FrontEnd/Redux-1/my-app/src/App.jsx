import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import { incrementCart, decrementCart, resetCart } from './cartSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);
  const cart = useSelector(state => state.cart);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br></br>
      <p>Cart: {cart}</p>
      <button onClick={() => dispatch(incrementCart())}>Increment</button>
      <button onClick={() => dispatch(decrementCart())}>Decrement</button>
      <button onClick={() => dispatch(resetCart())}>Reset</button>
    </div>
  )
}

export default App
