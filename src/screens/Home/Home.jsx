import { Button } from '@mui/material';
import { MainLayout } from '../../components/Layout/MainLayout';

export const Home = ({ onAuth }) => {
    return (
        <MainLayout>
          <div className="wrapper">
            <div className="main-container">
              <div className="content-wrapper">
                  <h4>Welcome to the chat!</h4>
                  <Button onClick={onAuth}>Auth</Button>
              </div>
            </div>
          </div>
        </MainLayout>
    );
}