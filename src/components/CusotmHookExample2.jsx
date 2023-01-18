import useLocalStorage from '../hooks/useLocalStorage';

function CusotmHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    if (Array.isArray(tasks)) {
      setTasks([...tasks, taskObj]);
    } else {
      setTasks([taskObj]);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className='w-25'>
        <div className='mb-3'>
          <label className='form-label'>Task</label> <br />
          <input
            type='text'
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <hr />
      {tasks.map((task) => {
        return <h3 key={task.date}>{task.task}</h3>;
      })}
    </>
  );
}

export default CusotmHookExample2;
