import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>Hello world</div>
      <div>
        <Link to={`notes/`}>Notes</Link>
      </div>
      <Link to={`create/`}>Create</Link>
    </div>
  );
}

export default App;
