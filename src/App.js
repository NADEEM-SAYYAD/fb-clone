import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/headers/Header';
import Sidebar from './components/sidebar/Sidebar';
import Widget from './components/widget/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}
export default App;
