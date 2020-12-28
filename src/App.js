import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ShowArticles from './containers/ShowArticles/ShowArticles';
import AddArticle from './containers/AddArticle/AddArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/articles'>
          <ShowArticles />
        </Route>
        <Route path='/add-article'>
          <AddArticle />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
