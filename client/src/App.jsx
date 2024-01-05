import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/homepage/Blog';
import NewPost from './pages/NewPost';
import MainFeaturedPost from './pages/homepage/MainFeaturedPost';
import Index from './pages/Index';
import SinglePost from './pages/SinglePost';
import EditPost from './pages/EditPost';
import Header from './pages/homepage/Header';
import Category from './pages/homepage/Category';
import Footer from './pages/homepage/Footer';
import SpecificCate from './pages/SpecificCate';


function App() {
  return (
      <div>
        <Header />
        <Category />
        <Router>
          <Routes>
            <Route path='/' exact Component={Index}/>
            <Route path='/new' exact Component={NewPost} />
            <Route path='/category/:cate' exact Component={SpecificCate} />
            <Route path='/:id' exact Component={SinglePost} />
            <Route path='/:id/edit' exact Component={EditPost} />
          </Routes>
        </Router>
        <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
      </div>
  )
}

export default App
