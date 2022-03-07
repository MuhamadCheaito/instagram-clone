import React from "react"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FeedPage from './pages/feed'
import ExplorePage from './pages/explore'
import ProfilePage from './pages/profile'
import PostPage from './pages/post'
import EditProfilePage from './pages/edit-profile'
import LoginPage from './pages/login'
import SignUpPage from './pages/signup'
import NotFoundPage from './pages/not-found'

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={FeedPage}/>
      <Route path="/explore"  component={ExplorePage}/>
      <Route path="/p/:postId" exact  component={PostPage}/>
      <Route path="/:username" exact component={ProfilePage}/>
      <Route path="/accounts/edit"  component={EditProfilePage}/>
      <Route path="/accounts/login"  component={LoginPage}/>
      <Route path="/accounts/emailsignup"  component={SignUpPage}/>
      <Route path="*"  component={NotFoundPage}/>
    </Switch>
  </Router>)
}

export default App;
