import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import BookList from './components/booklist';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
