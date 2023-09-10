import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Taskbar from './components/Taskbar';
import "draft-js/dist/Draft.css";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DocumentWriter from './components/DocumentWriter';

function App( ) {

  return (
    <div className="App">
      <header className="App-header">
          DockIt
      </header>
      <div className="App-body">
        <Taskbar />
        < div className="box2">
        </div>
        < div className="box3">
          <DocumentWriter />
        </div>
        < div className="box4"></div>
      </div>
    </div>
  );
}
// Google API Key: AIzaSyAeqbosjNbQZaAAVK03Swv6mk9OJ7vOUD8
// Google Request: https://www.googleapis.com/customsearch/v1?[parameters]
// Example: GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
// Search Engine ID: 2787595a6923445c2 (=&cx)
// Search Engine Name: dockit search engine

// Use Code: <script async src="https://cse.google.com/cse.js?cx=2787595a6923445c2">
//            </script>
//            <div class="gcse-search"></div>
export default App;
