import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { sendPOST } from '../../services/ApiServices';
import DCInputText from '../../components/Form/DCInputText'
import DCButton from '../../components/Form/DCButton'
import imageLogo from '../../assets/img/template/logo.png'
import './login.css'



function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    function callbackLogin(response){
        navigate("/dashboard");
    }

    async function handlerLogin(){
        if(username === ''){
            toast.error("Usuário é obrigatório", { position: "top-right" })
            return
        }

        if(password === ''){
            toast.error("Senha é obrigatória", { position: "top-right" })
            return
        }

        const body = {
            "username": username,
            "password": password
        }

        callbackLogin()
    }

    return(
        <div className='login-container'>
            <div className='login-container-card'>
                <div className='login-container-data-form'>
                    <div className='login-image'>
                        <img src={ imageLogo } />
                    </div>

                    <h1 className='login-title'>Login Backoffice</h1>

                    <div className='login-content-form'>
                        <div className='row-form-login'>
                            <DCInputText label='Usuário' name='username' placeholder='Digite seu usuário' type='email' required={ true } icon={ <FaUser /> } change={ (e) => setUsername(e.target.value) } />
                        </div>

                        <div className='row-form-login'>
                            <DCInputText label='Senha' name='password' placeholder='Digite sua senha' type='password' required={ true } icon={ <RiLockPasswordFill /> } change={ (e) => setPassword(e.target.value) } />
                        </div>

                        <div className='row-form-login'>
                            <DCButton text='entrar' action={ handlerLogin } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;