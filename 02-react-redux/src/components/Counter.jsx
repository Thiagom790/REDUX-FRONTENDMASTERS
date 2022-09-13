import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, set, decrement } from '../store/actions';
import { useActions } from '../store/use-actions';
import { useCounter } from '../store/use-counter';
import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  // com o useSelector eu pego o que quero do meu state
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  // const actions = bindActionCreators({ increment, decrement, set }, dispatch);
  // const actions = useActions({ increment, decrement, set });
  const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        {/* Isso é o mesmo que usar o actions creator */}
        {/* <button onClick={() => dispatch({ type: 'DECREMENT' })}> */}
        {/* <button onClick={() => dispatch(decrement(10))}>Decrement</button> */}
        <button onClick={() => decrement(10)}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
