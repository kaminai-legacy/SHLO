
const validate = values => {

  const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    console.log("----4----");
    if (!values.password) {
      errors.password = 'Required'
    }
    console.log("----5----");
    return errors
};

export default validate
