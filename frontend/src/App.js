
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

// Toast config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUpdate from './pages/admin/AdminUpdate';
import AdminRoutes from './protected_routes/AdminRoutes';
import Profile from './pages/profile/Profile';
import UserRoutes from './protected_routes/UserRoutes';


function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

        {/* Profile - Make a page and route*/}

        <Route element={<UserRoutes/>}>
          <Route path='/profile' element={<Profile/>} />
        </Route>
        
        {/* Admin Routes */}
        <Route element={<AdminRoutes/>}>
          
        </Route>

        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/update/:id' element={<AdminUpdate/>} />

      </Routes>
    </Router>
  );
}



// Task :
// Create seperate page for Login and Register

export default App;

// TAsk 
// 1. Create a path for login page
// 2. Make a UI
// 3. Make a useState