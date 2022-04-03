import classNames from 'classnames';
import React, { useState } from 'react';
import { HelpForm } from '../FormHelp/HelpForm';
import { HelpTabs } from '../HelpTabs/HelpTabs';
import { Payment } from '../Payment/Payment';
import './UserForm.scss'

export const UserForm: React.FC = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [state, setState] = useState('');
  const [index, setIndex] = useState('');

  const [displayHelp, setDisplayHelp] = useState('moneyHelp');
  const [resetTogler, setResetTogler] = useState(false);
  
  const [emailError, setEmailError] = useState(false);
  const [indexError, setIndexError] = useState(false);

  const handleDisplay = (helpTypeToogle: string) => {
    setDisplayHelp(helpTypeToogle);
  }

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const reset = () => {
    setName('');
    setSurname('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setCity('');
    setAdress('');
    setState('');
    setIndex('');
  }

  const charField = (
    event: React.ChangeEvent<HTMLInputElement>, 
    changer: (param: string) => void
    ) => {
      if (!event.target.value.split('').some(char => numbers.includes(char))) {
        changer(event.target.value.trim());
      }
  }

  const numberField = (
    event: React.ChangeEvent<HTMLInputElement>, 
    changer: (param: string) => void
    ) => {
      if (event.target.value.split('').every(char => numbers.includes(char))) {
        changer(event.target.value);
      }
  }

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <form 
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
          setEmailError(true)
          return
        }

        if (index.length !== 5) {
          setIndexError(true);
          return;
        }

        reset()
        setResetTogler(!resetTogler);
      }} 
    >
      <div className='form__user-info'>
        <div className="form__field--double">
          <label htmlFor="name" className="form__field">
            <p className="form__text">Ім'я</p>
            <input 
              type="text" 
              className="form__input" 
               required
              value={name}
              onChange={(event) => {
                charField(event, setName)
              }}
            />
          </label>

          <label htmlFor="surname" className="form__field">
            <p className="form__text">Прізвище</p>
            <input 
              type="text" 
              className="form__input" 
              required
              value={surname}
              onChange={(event) => {
                charField(event, setSurname)
              }}
            />
          </label>
        </div>

        <label htmlFor="Country" className="form__field">
          <p className="form__text">Країна</p>
          <input 
            type="text" 
            className="form__input"
            required
            value={country}
            onChange={(event) => {
              charField(event, setCountry)
            }}
          />
        </label>

        <label htmlFor="company" className="form__field">
          <p className="form__text">Назва компанії, організація</p>
          <input 
            type="text" 
            className="form__input"
            required
            value={companyName}
            onChange={(event) => {
              charField(event, setCompanyName)
            }}
          />
        </label>

        <div className="form__field--double">
          <label htmlFor="city" className="form__field">
            <p className="form__text">Місто</p>
            <input 
              type="text" 
              className="form__input"
              required
              value={city}
              onChange={(event) => {
                charField(event, setCity)
              }}
            />
          </label>
          <label htmlFor="state" className="form__field">
            <p className="form__text">Штат, район</p>
            <input 
              type="text" 
              className="form__input"
              required
              value={state}
              onChange={(event) => {
                charField(event, setState)
              }}
            />
          </label>
        </div>

        <label htmlFor="Email" className={classNames('form__field', {'form__field-error': emailError})}> 
          <p className="form__text">Email-адреса</p>
          <input 
            type="text" 
            className="form__input"
            required
            value={email}
            onChange={(event) => {
              setEmailError(false);
              setEmail(event.target.value);
            }}
          />
        </label>



        <label htmlFor="adress" className="form__field">
          <p className="form__text">Адреса</p>
          <input 
            type="text" 
            className="form__input"
            required
            value={adress}
            onChange={(event) => {
              setAdress(event.target.value)
            }}
          />
        </label>

        <label htmlFor="phone" className="form__field">
          <p className="form__text">Номер телефону</p>
          <input 
            type="text" 
            className="form__input"
            required
            value={phone}
            onChange={(event) => {
              numberField(event, setPhone)
            }}
          />
        </label>



        <div className="form__field--double">
          <label htmlFor="index" className={classNames('form__field', {'form__field-error': indexError})}>
            <p className="form__text">Поштовий індекс</p>
            <input 
              type="text" 
              className="form__input"
              required
              value={index}
              maxLength={5}
              onChange={(event) => {
                setIndexError(false);
                numberField(event, setIndex);
            }}
          />
          </label>
        </div>
      </div>

      <HelpForm />
      <HelpTabs 
        handleDisplay={handleDisplay} 
        displayHelp={displayHelp} 
      />
      {displayHelp === 'moneyHelp' && <Payment resetTogler={resetTogler} />}

      <button className="form__submit-button">Допомогти</button>
    </form>
  )
}
