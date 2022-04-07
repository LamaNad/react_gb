import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../../components/Layout/MainLayout';
import { toggleCheckbox } from '../../store/profile/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // console.log(state);

  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          <div className="content-wrapper">
              Profile
              <div className='show_username__bl'>
                <Switch onChange={handleClick} />
                Username
              </div>
              { state.showName && <span>{ state.name }</span>}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}