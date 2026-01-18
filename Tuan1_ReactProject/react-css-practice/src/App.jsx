import React, { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import LoginForm from './components/LoginForm/LoginForm';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('This is a success alert!');
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
  };

  return (
    <div className="App">
      <h1>React CSS Practice</h1>

      <section>
        <h2>Bài 1: Product Card</h2>
        <ProductCard
          image="https://via.placeholder.com/300x200"
          name="Sample Product"
          price={19.99}
        />
      </section>

      <section>
        <h2>Bài 2: Button Component</h2>
        <Button type="primary" onClick={() => handleButtonClick('success', 'Primary button clicked!')}>Primary</Button>
        <Button type="danger" onClick={() => handleButtonClick('error', 'Danger button clicked!')}>Danger</Button>
        <Button type="success" onClick={() => handleButtonClick('warning', 'Success button clicked!')}>Success</Button>
      </section>

      <section>
        <h2>Bài 3: Alert Component</h2>
        <button onClick={() => handleButtonClick('success', 'Success alert!')}>Show Success</button>
        <button onClick={() => handleButtonClick('warning', 'Warning alert!')}>Show Warning</button>
        <button onClick={() => handleButtonClick('error', 'Error alert!')}>Show Error</button>
        
        {showAlert && (
          <Alert
            type={alertType}
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        )}
      </section>

      <section>
        <h2>Bài 4: Login Form</h2>
        <LoginForm />
      </section>

      <section>
        <h2>Bài 5: Responsive Product List</h2>
        <ProductList />
      </section>
    </div>
  );
}

export default App;