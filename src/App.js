
import './App.css';
import Feed from './Feed.js/Feed';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './widgets/Widgets';

function App() {
  return (
    //BEM
    <div className="app">
      {/*Side bare*/}
      <Sidebar/>
      {/*feed */}
      <Feed/>
      {/* widgets*/}
      <Widgets/>
    </div>
  );
}

export default App;
