import React, { useState } from 'react'
import { validationFields } from './validate';
import classnames from "classnames";
import { connect, useDispatch } from 'react-redux';
import { registerUser } from '../../actions/auth';
import ImageSelect from '../common/image-select';


const Register = () => {

    const initialState = {
        username: "semen@gmail.com",
        password: "123456",
        confirmPassword: "123456",
        fullName: "Іван Васильович",
        errors: {}
    };

    const [register, setRegister] = useState(initialState);

    const dispatch = useDispatch();

    const onChangeInputHandler = (e) => {
        var target = e.target;
        setRegister({...register, [target.name]: target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();

        let errors = validationFields(register);
        const isValid = Object.keys(errors).length == 0;
        if (isValid) {
            dispatch(registerUser(
                { 
                    username: register.username, 
                    password: register.password,
                    confirmPassword: register.confirmPassword,
                    fullName: register.state.fullName
                }
            ))
            .then(
                responce => {
                    console.log("redirect to home page")
                },
                error => {
                    //this.setState({ errors: error.response.data} );
                    console.log("registe problem",  error.response.data)
                });

        }
        else {
            setRegister({...register, errors: errors});
            //this.setState({ errors: errors });
        }
        console.log('data send = ', register);
    }

    

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <h1>Реєстрація на сайт</h1>
                <form  onSubmit={submitForm}>

                    {!!register.errors.message &&
                        <div className="alert alert-danger" role="alert">
                            {register.errors.message}
                        </div>
                    }
                        
                         <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Повне ім'я</label>
                             <input type="text" className={classnames("form-control",
                                 { "is-invalid": register.errors.fullName })}
                                 id="fullName"
                                 name="fullName"
                                 value={register.fullName}
                                 onChange={onChangeInputHandler} />
                             {!!register.errors.fullName && <div className="invalid-feedback">{register.errors.fullName}</div>}
                         </div>

                         <div className="mb-3">
                             <label htmlFor="username" className="form-label">Логін</label>
                             <input type="text" className="form-control"
                                 id="username"
                                 name="username"
                                 value={register.username}
                                 onChange={onChangeInputHandler} />
                         </div>
                         <div className="mb-3">
                             <label className="form-label">Обрати фото</label>
                             <ImageSelect />
                         </div>
                         <div className="mb-3">
                             <label htmlFor="password" className="form-label">Пароль</label>
                             <input type="password" className={classnames("form-control",
                                 { "is-invalid": register.errors.password })}
                                 id="password"
                                 name="password"
                                 value={register.password}
                                 onChange={onChangeInputHandler} />
                             {!!register.errors.password && <div className="invalid-feedback">{register.errors.password}</div>}

                         </div>

                         <div className="mb-3">
                             <label htmlFor="confirmPassword" className="form-label">Повтор пароль</label>
                             <input type="password" className={classnames("form-control",
                                 { "is-invalid": register.errors.confirmPassword })}
                                 id="confirmPassword"
                                 name="confirmPassword"
                                 value={register.confirmPassword}
                                 onChange={onChangeInputHandler} />
                             {!!register.errors.confirmPassword && <div className="invalid-feedback">{register.errors.confirmPassword}</div>}
                         </div>


                         <button type="submit" className="btn btn-primary">Реєстрація</button>
                     </form>
            </div>
        </div>
    );

};

export default Register


// export class Register extends Component {

//     // componentDidMount=() =>{
//     //     this.props.history.push('/');
//     // }
//     state = {
//         username: "semen@gmail.com",
//         password: "123456",
//         confirmPassword: "123456",
//         fullName: "Іван Васильович",
//         errors: {}
//     }
//     submitForm = (e) => {
//         e.preventDefault();

//         let errors = validationFields(this.state);
//         const isValid = Object.keys(errors).length == 0;
//         if (isValid) {

//             this.props.registerUser(
//                 { 
//                     username: this.state.username, 
//                     password: this.state.password,
//                     confirmPassword: this.state.confirmPassword,
//                     fullName: this.state.fullName
//                 }
//             )
//             .then(
//                 responce => {
//                     console.log("redirect to home page")
//                 },
//                 error => {
//                     this.setState({ errors: error.response.data} );
//                     console.log("registe problem",  error.response.data)
//                 });

//         }
//         else {
//             this.setState({ errors: errors });
//         }
//         console.log('data send = ', this.state);
//     }

//     onChangeInputHandler = (e) => {
//         var target = e.target;
//         this.setState({
//             [target.name]: target.value
//         });
//     }

//     render() {
//         console.log("---register---", this.props);
//         const { username,
//             password,
//             confirmPassword,
//             fullName,
//             errors } = this.state; //дестурктуризація
//         return (
//             <div className="row">
//                 <div className="col-md-4 offset-md-4">
//                     <h1>Реєстрація на сайт</h1>
//                     {/* <img src="http://localhost:8087/files/1.jpg"/> */}
//                     <form onSubmit={this.submitForm}>

//                     {!!errors.message && 
//                     <div className="alert alert-danger" role="alert">
//                         {errors.message}
//                     </div>
//                     }
                        
//                         <div className="mb-3">
//                             <label htmlFor="fullName" className="form-label">Повне ім'я</label>
//                             <input type="text" className={classnames("form-control",
//                                 { "is-invalid": errors.fullName })}
//                                 id="fullName"
//                                 name="fullName"
//                                 value={fullName}
//                                 onChange={this.onChangeInputHandler} />
//                             {!!errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="username" className="form-label">Логін</label>
//                             <input type="text" className="form-control"
//                                 id="username"
//                                 name="username"
//                                 value={username}
//                                 onChange={this.onChangeInputHandler} />

//                         </div>

//                         <div className="mb-3">
//                             <label className="form-label">Обрати фото</label>
//                             <ImageSelect />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Пароль</label>
//                             <input type="password" className={classnames("form-control",
//                                 { "is-invalid": errors.password })}
//                                 id="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={this.onChangeInputHandler} />
//                             {!!errors.password && <div className="invalid-feedback">{errors.password}</div>}

//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="confirmPassword" className="form-label">Повтор пароль</label>
//                             <input type="password" className={classnames("form-control",
//                                 { "is-invalid": errors.confirmPassword })}
//                                 id="confirmPassword"
//                                 name="confirmPassword"
//                                 value={confirmPassword}
//                                 onChange={this.onChangeInputHandler} />
//                             {!!errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
//                         </div>


//                         <button type="submit" className="btn btn-primary">Реєстрація</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }


// export default connect(null, {registerUser})(Register);
