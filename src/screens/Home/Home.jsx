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
      setError(e.message);
    }
  };

    return (
        <MainLayout>
          <div className="wrapper">
            <div className="main-container">
              <div className="content-wrapper">
                  <h4>Welcome to the chat!</h4>
                  <LoginForm onSubmit={handleSubmit} />
                  {error && <h5>{error}</h5>}
                  { !isSignUp && 
                    <Link to="#" className="forgot_pass__link">Forgot password? </Link>
                   }
                  <Link to={ isSignUp ? "/" : "/signup" } className="create_account__link">
                    { isSignUp ? "Login" : "Create new account" }
                  </Link>
              </div>
            </div>
          </div>
        </MainLayout>
    );
};