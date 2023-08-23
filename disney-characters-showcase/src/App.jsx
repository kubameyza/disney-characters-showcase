import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import DisneyCharacters from './components/DisneyCharacters/DisneyCharacters';
import MyFavorites from './components/MyFavorites/MyFavorites';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DisneyCharacters />} />
          <Route path="/MyFavorites" elemetnt={<MyFavorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
