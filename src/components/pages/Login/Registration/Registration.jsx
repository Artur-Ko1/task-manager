import React from 'react'
import cl from '../Login.module.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <>
        <div className={cl.main__right__title}>
            <h2>
                Регистрация
            </h2>
        </div>
        <form id={cl.formLogin}>
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Почта'/>
            <input type="text" placeholder='Пароль'/>
            <button>Зарегистрироваться</button>
        </form>
        <div className={cl.question}>
            <span>Уже есть аккаунт?</span>
            <Link to='/aut'>Войти</Link>
        </div>
    </>
  )
}

export default Registration