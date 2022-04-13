import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import { MainLayout } from '../../components/Layout/MainLayout';
import { setName, toggleCheckbox } from '../../store/profile/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.profile);

  const handleClick = () => {
    dispatch(toggleCheckbox);
  };
  const handleSubmit = (text) => {
    dispatch(setName(text));
  };

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          <div className="content">
              Profile
              <div className='show_username__bl'>
                <Switch onChange={handleClick} checked={state.showName} />
                Username
              </div>
              { state.showName && <span>{ state.name }</span>}
          </div>
          <h4>Set your new name: </h4>
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </MainLayout>
  );
}