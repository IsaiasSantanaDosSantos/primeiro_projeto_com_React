import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'

import Container from './componets/layout/Container'

function App() {
  return (
    <Router >
      <div>
        <Link to="/" >Home</Link>
        <Link to="/company" >Company</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/newproject" >NewProject</Link>
      </div>
      <Container customClass="min-height" >
       <Routes >
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/company" element={<Company />} >
          </Route>
          <Route path="/contact" element={<Contact />} >
          </Route>
          <Route path="/newproject" element={<NewProject />} >
          </Route>
        </Routes >
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
