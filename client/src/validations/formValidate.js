const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'RequiredO'
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.lastName) {
      errors.lastName = 'RequiredI'
    } else if (values.lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
    }
    if (!values.displayName) {
      errors.displayName = 'Required'
    } else if (values.displayName.length > 20) {
      errors.displayName = 'Must be 20 characters or less'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    }
    if (!values.PasswordConfirmation) {
      errors.PasswordConfirmation = 'Required'
    } else if (values.password!==values.PasswordConfirmation) {
      errors.PasswordConfirmation = 'Passwords must be confare'
    }
    if (!values.customerStatus) {
      errors.customerStatus = 'Required'
    }
    return errors

};



export default validate

