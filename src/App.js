import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import PostView from './components/PostView';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/posts/new" element={<NewPost/>} />
            <Route path="/posts/:id" element={<PostView/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}