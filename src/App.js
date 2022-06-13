import logo from './logo.svg';
import './App.css';
import Layout from './components/layout'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'


function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Layout />
      </ReduxProvider>
    </div>
  );
}

export default App;
