import './App.css';
import Embed from './Components/Embed';
import Mwh from './Components/Mwh';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Disqus React SSO Demo
        </h1>
        <h3>This is the React version of <a href='https://disqus-sso-demo.glitch.me/' target='_blank'>https://disqus-sso-demo.glitch.me/</a></h3>

      <div>
        {/* <Embed/> */}
        <Mwh/>
      </div>
      </header>
    </div>
  );
}

export default App;
