import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewProfile from './Pages/Profile/ViewProfile.jsx';
// import Security from "./Pages/Settings/Security.jsx";
import Dashboard from './Pages/Home/Dashboard.jsx';
import EditProfile from './Pages/Profile/EditProfile.jsx'
import LogOutPopUp from './components/LogOutPopUp.jsx'
import Home from "./Home.jsx"
import Sidebar from './components/Drawer.jsx';
import { Switch } from '@mui/material';
import ActivityPage from './Pages/Home/Actvity.jsx';

const App = () => {
  return (
    // <Home />
    <>
    
    <Router>
      < Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          {/* <Route path="/security" element={<Security />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<ActivityPage />} />

          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/logout" element={<LogOutPopUp />} />

        </Routes>
        {/* </Sidebar> */}
    </Router>
    </>
  );
};

// Sample Home Page Component
// const HomePage = () => (
//   <div>
//     <h1>Welcome to the Home Page</h1>
//   </div>
// );

export default App;

