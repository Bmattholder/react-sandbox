import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post) => {
        return <h6 key={post.id}>{post.title}</h6>;
      })}
    </div>
  );
}

export default CustomHookExample1;
