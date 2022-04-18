import { Button, Switch } from '@mui/material';
import { /* connect, */ useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import { MainLayout } from '../../components/Layout/MainLayout';
import { setName, toggleCheckbox } from '../../store/profile/actions';
import { selectName, selectShowName } from '../../store/profile/selectors';
import { usePrev } from '../../utils/usePrev';

export const Profile = () => {
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
              Profile
              <div className='show_username__bl'>
                <Switch onChange={handleClick} checked={showName} />
                Username
              </div>
              { showName && <h3>Name: <span>{ name }</span> </h3> }
              {  prevName
                  && <div>
                      <h4> Your previous name: <span>{ prevName }</span></h4> 
                      <Button onClick={() => handleSetPrevName(prevName)} className="mybtn" type="submit" variant="contained" >Set previous name</Button>
                    </div>
              }
          </div>
          <h4>Set your new name: </h4>
          <Form onSubmit={handleSubmit} />
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
