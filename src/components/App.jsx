import { Routes, Route } from 'react-router-dom';
import PAGES from 'router/paths';
import Home from 'pages/Home';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGES.homepage} element={<Home />}></Route>
        <Route path="*" element={<>Hello world!</>}></Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
