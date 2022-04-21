import { Box, Button, FormGroup, Switch } from '@mui/material';
import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';

import { Form } from '../../components/Form/Form';
import { MainLayout } from '../../components/Layout/MainLayout';
import { logOut, userNameRef, userShowNameRef } from '../../services/firebase';

import { usePrev } from '../../utils/usePrev';

export const Profile = ({ onLogout }) => {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState('');

  const prevName = usePrev(name);

  const handleClick = () => {
    set(userShowNameRef, !showName);
  };
  const handleSubmit = (text) => {
    set(userNameRef, text);
  };

  const handleSetPrevName = (prevName) => {
    set(userNameRef, prevName);
  };

  useEffect(() => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
      // snapshot.forEach((child) => console.log(child.key, child.val()));
      setName(snapshot.val());
    });
    const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
      setShowName(snapshot.val());
    });

    return  () => {
      unsubscribeName();
      unsubscribeShowName();
    };
  },[]);

  return (
    <MainLayout>
      <div className="wrapper">
        <div className="main-container">
          <div className="content">
            <h1>Profile</h1>
            <Button onClick={logOut}>Logout</Button>
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
                  { showName === 'true'
                    ? <Switch onChange={handleClick} checked />
                    : <Switch onChange={handleClick} />
                  }
                  New username
                </div>
              </FormGroup>
              { showName &&
                  <Form onSubmit={handleSubmit} />
              }
            </Box>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}