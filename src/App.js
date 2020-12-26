import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Articles from './containers/Articles/Articles';
import NewArticle from './containers/NewArticle/NewArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/articles'>
          <Articles />
        </Route>
        <Route path='/add-article'>
          <NewArticle />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
