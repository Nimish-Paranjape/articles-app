import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ShowArticles from './containers/ShowArticles/ShowArticles';
import AddArticle from './containers/AddArticle/AddArticle';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/articles' component={ShowArticles} />
        <Route path='/add-article' component={AddArticle} />
      </div>
    </BrowserRouter>
  );
}

export default App;
