import  { useEffect } from 'react';
import serviceworker from './sw'

const Smartech = () => {
  useEffect(() => {
    window.smartech('create', config.user_key);
    window.smartech('register', config.siteid);
    window.smartech('identify', '');
  }, []);

  return null;
};

export default Smartech;
