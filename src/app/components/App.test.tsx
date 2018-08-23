import App from 'app/components/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter>
    <App />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
