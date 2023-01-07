import React from 'react'
import cl from './Login.module.css'
import logo from '../../../Assets/img/logo.svg'
import vectorTop from '../../../Assets/img/vector-login-top.svg'
import vectorBottom from '../../../Assets/img/vector-login-bottom.svg'
import Registration from './Registration/Registration'
import {Routes, Route} from 'react-router-dom'
import Autorization from './Autorization/Autorization'

const Login = () => {
  return (
    <section>
        <div className={cl.container}>
            <div className={cl.images}>
                <img src={vectorTop} alt="vector top" />
                <img src={vectorBottom} alt="vector bottom" />
            </div>
            <div className={cl.main}>
                <div className={cl.main__left}>
                  <img src={logo} alt="logo" />
                  <h1>Task Manager</h1>
                  <p>Эффективное управление любыми проектами для вашей компании</p>
                </div>
                <div className={cl.main__right}>
                    <Routes>
                        <Route path='/' element={<Registration />}></Route>
                        <Route path='/reg' element={<Registration />}></Route>
                        <Route path='/aut' element={<Autorization />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Login