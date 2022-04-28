import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/Layout/MainLayout';
import { LoginForm } from '../../components/Form/LoginForm';
import { signUp, logIn } from '../../services/firebase';
import { useState } from 'react';

export const Home = ({ onAuth, isSignUp }) => {
  const [error, setError] = useState("");

  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      }
    } catch (e) {
      const err = e.message;
      if (err === 'Firebase: Error (auth/invalid-email).' || 'Firebase: Error (auth/user-not-found).') {
        setError('Invalid email or password');
      } else {
        setError(err);
      }
    }
  };


  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          {!isSignUp
            ? <div className="content-wrapper">
                <LoginForm onSubmit={handleSubmit} error={error} isSignUp={isSignUp} />
                <Link to="#" className="forgot_pass__link">Forgot password? </Link>
                <Link to="/signup" className="create_account__link">Create new account</Link>
              </div>
            : <div className="content-wrapper">
                <LoginForm onSubmit={handleSubmit} error={error} isSignUp={isSignUp} />
                <Link to="/" className="create_account__link">Login</Link>
              </div>
          }
        </div>
      </div>
    </MainLayout>
  );
};