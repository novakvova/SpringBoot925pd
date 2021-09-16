// function validationFields(items) {
//     let errors = {};
//     if(items.username.trim() == '')
//     {
//         errors = {
//             ...errors,
//             username: "Поле логіє є пустим"
//         };
//     }

//     if(items.fullName.trim() == '')
//     {
//         errors = {
//             ...errors,
//             fullName: "Поле повне ім'я є пустим"
//         };
//     }

//     if(items.password.trim() == '')
//     {
//         errors = {
//             ...errors,
//             password: "Поле пароля є пустим"
//         };
//     }
//     return errors;
// }

// export {validationFields};

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Логін є обов'язковим")
        .email('Логін має бути електронной поштой'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

export const formOptions = {
    resolver: yupResolver(validationSchema)
};