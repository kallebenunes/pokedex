import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './GlobalStyle';
import { GlobalContextProvider } from './GlobalContext';

ReactDOM.render(
  <GlobalContextProvider>
    <GlobalStyle/>
    <App/>
  </GlobalContextProvider>  ,
  document.getElementById('root')
);

