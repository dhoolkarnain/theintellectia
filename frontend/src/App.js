// import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import HomePage from './Components/pages/Home/HomePage';
import HomeDefaultPage from './Components/pages/Home/HomePage/HomeDefaultPage';
import HomeMainPage from './Components/pages/Home/HomePage/HomeMainPage';
import Blogs from './Components/pages/Blogs';
import BlogsPage from './Components/pages/Blogs/BlogsPage';
import BlogsDefaultPage from './Components/pages/Blogs/BlogsPagePosts/BlogsDefaultPage';
import Category from './Components/pages/Category';
import Genre from './Components/pages/Category/Genre/Genre';
import Contacts from './Components/pages/Contacts';
import About from './Components/pages/About';
import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Post from './Components/pages/Category/Genre/Post';


function App ()
{

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} >
          <Route path="/" element={<Home />} >
            <Route path="/" element={<HomePage />} >
              <Route path='/' element={<HomeDefaultPage />} />
              <Route path="blogs/:id" element={<HomeMainPage />} />
            </Route>
          </Route>
          <Route path="/" element={<Blogs />} >
            <Route path="moreblogs" element={<BlogsPage />} >
              <Route index element={<BlogsDefaultPage />} />
            </Route>
          </Route>
          <Route path="category" element={<Category />} >
            <Route path=':genre' element={<Genre />} >
              <Route index element={<Post />} />
            </Route>
          </Route>
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
