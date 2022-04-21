import { Box, Button, FormGroup, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '../../components/Form/Form';
import { MainLayout } from '../../components/Layout/MainLayout';

import { setName, toggleCheckbox } from '../../store/profile/actions';
import { selectName, selectShowName } from '../../store/profile/selectors';
import { usePrev } from '../../utils/usePrev';

export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const prevName = usePrev(name);

  const handleClick = () => {
    dispatch(toggleCheckbox);
  };
  const handleSubmit = (text) => {
    dispatch(setName(text));
  };
  const handleSetPrevName = (prevName) => {
    dispatch(setName(prevName));
  };

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          <div className="content">
            <h1>Profile</h1>
            <Button onClick={onLogout}>Logout</Button>
            <h3> Username: <Box sx={{ color: 'primary.main' }}>{name}</Box> </h3>
            <Box sx={{ flexGrow: 1, maxWidth: 752, background: '#fff5', borderRadius: 5, padding: 3 }} >
              <FormGroup row>
                {prevName &&
                  <Box>
                    Set previous name:
                    <Button onClick={() => handleSetPrevName(prevName)} type="submit" > <span sx={{ fontWeight: 'bold' }} variant="contained" >{prevName}</span></Button>
                  </Box>
                }
              </FormGroup>
              <FormGroup row>
                <div className='show_username__bl'>
                  <Switch onChange={handleClick} checked={showName} />
                  New username
                </div>
              </FormGroup>
              {showName &&
                    <Form onSubmit={handleSubmit} />
                }
            </Box>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// export const ProfileToConnect = ({name, showName, changeName, changeCheckbox}) => {

//   const handleClick = () => {
//     changeCheckbox();
//   };
//   const handleSubmit = (text) => {
//     changeName(text);
//   };

//   return (
//     <MainLayout>
//       <div className="wrapper">
//         <div className="main-container">
//           <div className="content">
//               Profile
//               <div className='show_username__bl'>
//                 <Switch onClick={handleClick} />
//                 Username
//               </div>
//               { showName && <span>{ name }</span>}
//           </div>
//           <h4>Set your new name: </h4>
//           <Form onSubmit={handleSubmit} />
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   showName: state.profile.showName,
// });

// const mapDispatchProps = {
//   changeName: setName,
//   changeCheckbox: () => toggleCheckbox,
// };

// export const Profile = connect(
//   mapStateToProps,
//   mapDispatchProps
// )(ProfileToConnect);
