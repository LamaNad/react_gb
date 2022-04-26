import { Box, Button, FormGroup, Grid, Switch} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';

import { EditForm } from '../../components/Form/Profile/EditForm';
import { MainLayout } from '../../components/Layout/MainLayout';
import { getUserRefById, logOut, userNameRefById, userPhoneRefById, userShowEditProfileRefById } from '../../services/firebase';

export const Profile = ({ onLogout }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [name, setName] = useState('');
  const [showEditProfile, setShowEditProfile] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    set(userShowEditProfileRefById(user.uid), !showEditProfile);
  };

  const changeName = (value) => {
    set(userNameRefById(user.uid), value);
  };

  const changePhone = (value) => {
    set(userPhoneRefById(user.uid), value);
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setEmail(user.email);

    const unsubscribeProfile = onValue(getUserRefById(user.uid), (snapshot) => {
      const val = snapshot.val();
      setName(val.name);
      setPhone(val.phone);
    });

    const unsubscribeShowEditProfile = onValue(getUserRefById(user.uid), (snapshot) => {
      const val = snapshot.val();
      setShowEditProfile(val.showEditProfile);
    });

    return () => {
      unsubscribeProfile();
      unsubscribeShowEditProfile();
    };

  }, []);


  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          <div className="content">
            <h1>Profile</h1>
            <Button onClick={logOut}>Logout</Button>
            <Grid container >
              <Grid item xs={6}><h3> Username: <Box sx={{ color: 'primary.main' }}>{name}</Box> </h3></Grid>
              <Grid item xs={6}><h3> Email: <Box sx={{ color: 'primary.main' }}>{email}</Box> </h3></Grid>
              <Grid item xs={12}><h3> Phone: <Box sx={{ color: 'primary.main' }}>{phone}</Box> </h3></Grid>
            </Grid>

            <Box sx={{ flexGrow: 1, maxWidth: 752, background: '#fff5', borderRadius: 5, padding: 3 }} >
              <FormGroup row>
                <div className='show_username__bl'>
                  {showEditProfile &&
                    <Switch onChange={handleClick} checked />
                  }
                  {!showEditProfile &&
                    <Switch onChange={handleClick} />
                  }
                  Edit Profile
                </div>
              </FormGroup>
              { showEditProfile &&
                <Grid container
                spacing={1}
                direction="column"
                alignItems="center" >
                  <Grid item xs={12}><h2>Edit Profile</h2></Grid>
                  <Grid item xs={6}>
                    <EditForm onSubmit={changeName} label={'Name'} type={'text'} />
                  </Grid>
                  <Grid item xs={6}>
                    <EditForm onSubmit={changePhone} label={'Phone'} type={'text'}/>
                  </Grid>
                </Grid>
              }
            </Box>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}