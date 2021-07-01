import { BrowserRouter, Link } from 'react-router-dom'

import HomePageRoute from './HomePageRoute';

import { linkArray } from './routes';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="ms-4">
        {linkArray.map(item => (
          <li key={item.key}>
            <Link to={item.to}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>

      <HomePageRoute />
    </BrowserRouter>
  );
}

export default App;
