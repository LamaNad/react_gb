import { MainLayout } from '../../components/Layout/MainLayout';

export const Home = () => {
    return (
        <MainLayout>
        <div className="wrapper">
          <div className="main-container">
            <div className="content-wrapper">
                Welcome to the chat!
            </div>
          </div>
        </div>
        </MainLayout>
    );
}