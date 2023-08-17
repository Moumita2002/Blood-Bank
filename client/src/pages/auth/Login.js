import React from 'react'
import InputType from '../../components/shared/form/InputType'
import Form from '../../components/shared/form/Form'
import { useSelector } from 'react-redux'
import Spinner from './../../components/shared/Spinner';
import { toast } from 'react-toastify';

const Login = () => {
    const { loading, error } = useSelector(state => state.auth)
    return (
        <>
            {error && <span>{toast.error(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div className='row g-0'>
                    <div className='col-md-8 form-banner'>
                        <img src='https://img.freepik.com/free-vector/human-blood-donate-white-background_1308-111266.jpg?w=2000' />
                    </div>

                    <div className="col-md-4 form-container">
                        <Form submitBtn={'Login'} formTitle={'Login'} formType={'login'} />
                    </div>

                </div>
            )
            }


        </>

    );
};

export default Login