const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Field cannot be empty'
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.lastName) {
      errors.lastName = 'Field cannot be empty'
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please check the format of email address'
    }
    if (!values.displayName) {
      errors.displayName = 'Display name should be more than 4 characters'
    } else if (values.displayName.length > 20) {
      errors.displayName = 'Must be 20 characters or less'
    }
    if (!values.password) {
      errors.password = 'Password confirmation needs to match original password'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    }
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Required'
    } else if (values.password!==values.passwordConfirmation) {
      errors.passwordConfirmation = 'Password confirmation needs to match original password'
    }
    if (!values.customerStatus) {
      errors.customerStatus = 'Required'
    }
    return errors

};



export default validate

