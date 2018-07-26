import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import * as React from 'react';
import 'typeface-roboto';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header"/>
        <p className="App-intro">
          Hello
        </p>
      </div>
    );
  }
}

export default App;
