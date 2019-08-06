const yup = require('yup');

const schema = yup.object().shape({
    email: yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: yup.string()
        .min(8, 'at least 8 chars')
        .matches(/[a-z]/, 'at least one lowercase char')
        .matches(/[A-Z]/, 'at least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
    gender: yup.string()
        .min(4, "Must be longer than 8 characters")
        .max(6, "Must be longer than 8 characters")
        .matches(/Male|Female/)
        .required("Required"),
    role: yup.string()
        .min(4, "Choose ")
        .max(5, "Must be longer than 8 characters")
        .matches(/USER|ADMIN/)
        .required("Required"),
    fullName: yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required")

});

module.exports = schema;