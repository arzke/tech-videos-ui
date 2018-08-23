import App from 'app/components/App';
import 'element-theme-default';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from 'registerServiceWorker';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
