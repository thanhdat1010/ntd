import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import RegistrationForm from './pages/RegistrationForm';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />

        <Route
          path="/home"
          element={
            <>
              <AppNavbar />
              <Home />
            </>
          }
        />

        <Route
          path="/posts"
          element={
            <>
              <AppNavbar />
              <PostList />
            </>
          }
        />

        <Route
          path="/posts/:id"
          element={
            <>
              <AppNavbar />
              <PostDetail />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <AppNavbar />
              <About />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <AppNavbar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;