import { useState } from 'react';
import Todo from './Todo';

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <>
      {showTodo && <Todo />}
      <button className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>
        Toggle todo
      </button>
    </>
  );
}

export default UseRefExample3;
