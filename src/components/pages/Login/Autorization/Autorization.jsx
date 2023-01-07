import React from 'react'
import cl from '../Login.module.css'
import { Link } from 'react-router-dom'

const Autorization = () => {
  return (
    <>
    <div className={cl.main__right__title}>
        <h2>
        Авторизация
        </h2>
    </div>
    <form id={cl.formLogin}>
        <input type="text" placeholder='Почта'/>
        <input type="text" placeholder='Пароль'/>
        <button>Авторизоваться</button>
    </form>
    <div className={cl.question}>
        <p>Нет учетной записи?</p>
        <Link to='/reg'>Зарегистрироваться</Link>
    </div>
</>
  )
}

export default Autorization