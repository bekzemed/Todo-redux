import './App.css';
import Books from './components/Books';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditBooks from './components/EditBooks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/edit/:id" component={EditBooks} />
      </Switch>
    </Router>
  );
}

export default App;
