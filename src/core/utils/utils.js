import axios from 'axios';
import store from 'store';

const serviceCall = (url, details) => {
  return axios({...details, url: `/api/${url}`});
}

const browserStore = store;

//   config: {
//     fbAppId: 175573409567618,
//     loginRedirect: 'https://chat101.herokuapp.com/fbR',
//     scope: 'public_profile,email,user_friends,user_birthday,user_about_me,read_custom_friendlists',
//   },

export { serviceCall };
export { browserStore };