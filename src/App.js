import './App.css';

import Header from "./components/Header";
import Content from './components/Content';

import textSlice from './redux/textSlice';
import { useSelector } from 'react-redux';
import Paragraph from './components/Paragraph';


function App() {

  const params = useSelector(state => state.text.items)

  return (
    <div className="App">
      <Header />
      <Content />
      <Paragraph />
    </div>
  );
}

export default App;
