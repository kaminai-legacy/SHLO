import { SubmissionError } from 'redux-form';
import { userLogin } from '../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
const yup = require('yup');
const schema = require('../models/userSchema');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let resEmail;

function submit(values) {
  return sleep(200).then(async() => {
    // simulate server latency
    try{resEmail= await yup.reach(schema, 'email').isValid(values.email);
    }
    catch (e) {
    }
    if (!resEmail) {
      throw new SubmissionError({
        email: 'Email is not valid format',
        _error: 'Login failed!'
      })
    }
    const data={
      email:values.email,
      password:values.password
    };
//this.props.userLogin(data);
  })
}

/*const mapStateToProps = (state) => {
  return{
    state,
    fromStore:state.userReducers.isFetching
  }
};

const mapDispatchToProps = (dispatch) =>  ({
  userLogin : (data)=> dispatch(userLogin(data))
});
export default connect(mapStateToProps,mapDispatchToProps)(submit);
*/
export default submit
