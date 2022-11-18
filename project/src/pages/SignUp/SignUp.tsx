import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../components/Text'
import styles from './signup.module.scss'

export function SignUp() {
  const [value, setValue] = useState('')
  const [valueError, setValueError] = useState('')
  const [touched, setTouched] = useState(false)

  const navigate = useNavigate()
  const goMain = () => navigate('/users')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setTouched(true)
    setValueError(validateValue())

    const isFormValid = !validateValue()
    if (!isFormValid) {
      return null
    }

    sessionStorage.setItem('token', 'true')
    goMain()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const validateValue = () => {
    if (value.length <= 1) {
      return 'Введите больше 3-x символов'
    }
    return ''
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Text As="h1" size={20} bold>
          Регистрация
        </Text>
        <label className={styles.label} htmlFor="name">
          Имя
        </label>
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          aria-invalid={valueError ? 'true' : undefined}
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
        />
        {touched && valueError && <div>{valueError}</div>}
        {/* <label className={styles.label} htmlFor="email">
          Электронная почта
        </label>
        <input className={styles.input} type="email" id="email" name="email" placeholder="example@mail.ru" />
        <label className={styles.label} htmlFor="password">
          Пароль
        </label>
        <input className={styles.input} type="password" id="password" name="password" placeholder="****" />
        <label className={styles.label} htmlFor="confirm-password">
          Подтвердите пароль
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="****"
        /> */}
        <button className={styles.buttonForm} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </section>
  )
}
