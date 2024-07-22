import React, { useState } from 'react';
import ComponentA from './Home';
import ComponentB from './CustComponent1';
import ComponentC from './CustComponent2';
import ComponentD from './CustComponent3';
import ComponentE from './CustComponent4';
import ComponentF from './SaleComponent';
import Login from './Login';
import './ButtonStyles.css'; // Import a CSS file for button styles

const App = () => {
  const [userType, setUserType] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleLogin = (username, password) => {
    // Simulating login based on different users
    if (username === 'user1' && password === 'pass1') {
      setUserType('user1');
      setActiveComponent('ComponentA'); // Set ComponentA as active for user1
    } else if (username === 'user2' && password === 'pass2') {
      setUserType('user2');
      setActiveComponent(null); // No active component for user2 initially
    }
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const handleLogout = () => {
    setUserType(null);
    setActiveComponent(null); // Reset active component on logout
  };

  return (
    <div>
      {!userType ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div>
          {userType === 'user1' && (
            <div>
              <div>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentA')}>Overall Statistics</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentB')}>Total Customers in bank</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentC')}>Registered Managers</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentD')}>Respective Services Feedback</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentE')}>Overall Feedback</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentF')}>Sales Statistics</button>
              </div>
              {activeComponent === 'ComponentA' && <ComponentA />}
              {activeComponent === 'ComponentB' && <ComponentB />}
              {activeComponent === 'ComponentC' && <ComponentC />}
              {activeComponent === 'ComponentD' && <ComponentD />}
              {activeComponent === 'ComponentE' && <ComponentE />}
              {activeComponent === 'ComponentF' && <ComponentF />}
            </div>
          )}
          {userType === 'user2' && (
            <div>
              <div>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentB')}>Customers in our branch</button>
                <button className="custom-button" onClick={() => handleComponentChange('ComponentE')}>Feedback Overall</button>
              </div>
              {activeComponent === 'ComponentB' && <ComponentB />}
              {activeComponent === 'ComponentE' && <ComponentE />}
            </div>
          )}
          <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
