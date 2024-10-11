import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error= useRouteError();
  console.log(error)
  const handleGoHome = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{error.status +" Page "+error.statusText}</h1>
      <p style={styles.message}>
       {error.data}
      </p>
      <button onClick={handleGoHome} style={styles.button}>
        Go to Homepage
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '48px',
    color: '#ff0000',
  },
  message: {
    fontSize: '20px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ErrorPage;
