import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
export default NotFound;
