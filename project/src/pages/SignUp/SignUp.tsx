import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../components/Text'
import styles from './signup.module.scss'

export function SignUp() {
  // const [valueName, setName] = useState('')
  // const [valueNameError, setValueError] = useState('')
  const [touched, setTouched] = useState(false)

  const [valueEmail, setEmail] = useState('')
  const [valueEmailError, setEmailError] = useState('')

  const [valuePass, setPass] = useState('')
  const [valuePassError, setPassError] = useState('')

  const [valueConfirmPass, setConfirmPass] = useState('')
  const [valueConfirmPassError, setConfirmPassError] = useState('')

  const navigate = useNavigate()
  const goMain = () => navigate('/antipoff-group')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setTouched(true)
    // setValueError(validateValueName())
    setEmailError(validateValueEmail())
    setPassError(validateValuePass())
    setConfirmPassError(validateValueConfirmPass())

    const isFormValid = !validateValueEmail() && !validateValuePass() && !validateValueConfirmPass()
    // const isFormValid = !validateValueName()

    if (!isFormValid) {
      return null
    }

    sessionStorage.setItem('token', 'true')
    goMain()
  }

  // const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const handleChangePass = (event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)
  const handleChangeConfirmPass = (event: ChangeEvent<HTMLInputElement>) => setConfirmPass(event.target.value)

  // const validateValueName = () => {
  //   if (valueName.length <= 1) {
  //     return 'Введите больше 2-x символов'
  //   }

  //   return ''
  // }

  const validateValueEmail = () => {
    if (valueEmail.length <= 1) {
      return 'Неверный Email'
    }

    return ''
  }

  const validateValuePass = () => {
    if (valuePass === '') {
      return 'Пароли должны быть одинаковы'
    }

    if (valuePass !== valueConfirmPass) {
      return 'Пароли должны быть одинаковы'
    }

    return ''
  }

  const validateValueConfirmPass = () => {
    if (valueConfirmPass === '') {
      return 'Пароли должны быть одинаковы'
    }

    if (valuePass !== valueConfirmPass) {
      return 'Пароли должны быть одинаковы'
    }

    return ''
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Text As="h1" size={20} bold>
          Регистрация
        </Text>
        <Text As="span" size={16} bold>
          Это тестовое задание, достаточно пройти валидацию формы для запуска приложения и заполнить поля со звездочкой
        </Text>

        <label className={styles.label} htmlFor="name">
          Имя
        </label>
        <input
          className={styles.input}
          // value={valueName}
          // onChange={handleChangeName}
          // aria-invalid={valueNameError ? 'true' : undefined}
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
        />
        {/* {touched && valueNameError && <div style={{ color: 'red', fontSize: '10px' }}>{valueNameError}</div>} */}

        <label className={styles.label} htmlFor="email">
          Электронная почта*
        </label>
        <input
          className={styles.input}
          value={valueEmail}
          onChange={handleChangeEmail}
          aria-invalid={valueEmailError ? 'true' : undefined}
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.ru"
        />
        {touched && valueEmailError && <div style={{ color: 'red', fontSize: '10px' }}>{valueEmailError}</div>}

        <label className={styles.label} htmlFor="password">
          Пароль*
        </label>
        <input
          className={styles.input}
          value={valuePass}
          onChange={handleChangePass}
          aria-invalid={valuePassError ? 'true' : undefined}
          type="password"
          id="password"
          name="password"
          placeholder="****"
        />

        {touched && valuePassError && <div style={{ color: 'red', fontSize: '10px' }}>{valuePassError}</div>}

        <label className={styles.label} htmlFor="confirm-password">
          Подтвердите пароль*
        </label>
        <input
          className={styles.input}
          value={valueConfirmPass}
          onChange={handleChangeConfirmPass}
          aria-invalid={valueConfirmPassError ? 'true' : undefined}
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="****"
        />

        {touched && valueConfirmPassError && (
          <div style={{ color: 'red', fontSize: '10px' }}>{valueConfirmPassError}</div>
        )}

        <button className={styles.buttonForm} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </section>
  )
}
