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
  
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [stateError, setStateError] = useState(false);
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valideFields = 10;

    if (name.trim() === '') {
      setNameError(true);
      valideFields--;
    };

    if (surname.trim() === '') {
      setSurnameError(true);
      valideFields--;
    };

    if (country.trim() === '') {
      setCountryError(true);
      valideFields--;
    }

    if (companyName.trim() === '') {
      setCompanyNameError(true);
      valideFields--;
    };

    if (state.trim() === '') {
      setStateError(true);
      valideFields--;
    };

    if (city.trim() === '') {
      setCityError(true);
      valideFields--;
    };

    if (phone.trim() === '') {
      setPhoneError(true);
      valideFields--;
    }
  
    if (adress.trim() === '') {
      setAdressError(true);
      valideFields--;
    };

    if (!validateEmail(email)) {
      setEmailError(true);
      valideFields--;
    };

    if (index.length !== 5) {
      setIndexError(true);
      valideFields--;
    };

    if (valideFields !== 10) {
      return;
    }

    reset()
    setResetTogler(!resetTogler);
  }

  return (
    <form 
      className="form"
      onSubmit={onSubmit}
    >
      <div className='form__user-info'>
        <div className="form__field--double">
          <label
            htmlFor="name" 
            className={classNames('form__field', {'form__field--error': nameError})}
          >
            <p className="form__text">Ім'я</p>
            <input 
              type="text" 
              className="form__input" 
              value={name}
              onChange={(event) => {
                setNameError(false);
                charField(event, setName);
              }}
            />
          </label>

          <label
            htmlFor="surname" 
            className={classNames('form__field', {'form__field--error': surnameError})}
          >
            <p className="form__text">Прізвище</p>
            <input 
              type="text" 
              className="form__input" 
              value={surname}
              onChange={(event) => {
                setSurnameError(false);
                charField(event, setSurname);
              }}
            />
          </label>
        </div>

        <label
          htmlFor="country" 
          className={classNames('form__field', {'form__field--error': countryError})}
        >
          <p className="form__text">Країна</p>
          <input 
            type="text" 
            className="form__input"
            value={country}
            onChange={(event) => {
              setCountryError(false);
              charField(event, setCountry);
            }}
          />
        </label>

        <label
          htmlFor="company" 
          className={classNames('form__field', {'form__field--error': companyNameError})}
        >
          <p className="form__text">Назва компанії, організація</p>
          <input 
            type="text" 
            className="form__input"
            value={companyName}
            onChange={(event) => {
              setCompanyNameError(false);
              charField(event, setCompanyName)
            }}
          />
        </label>

        <div className="form__field--double">
          <label
            htmlFor="city" 
            className={classNames('form__field', {'form__field--error': cityError})}
          >
            <p className="form__text">Місто</p>
            <input 
              type="text" 
              className="form__input"
              value={city}
              onChange={(event) => {
                setCityError(false);
                charField(event, setCity)
              }}
            />
          </label>
          <label 
            htmlFor="state" 
            className={classNames('form__field', {'form__field--error': stateError})}
          >
            <p className="form__text">Штат, район</p>
            <input 
              type="text" 
              className="form__input"
              value={state}
              onChange={(event) => {
                setStateError(false);
                charField(event, setState)
              }}
            />
          </label>
        </div>

        <label 
          htmlFor="Email" 
          className={classNames('form__field', {'form__field--error': emailError})}
        > 
          <p className="form__text">Email-адреса</p>
          <input 
            type="text" 
            className="form__input"
            value={email}
            onChange={(event) => {
              setEmailError(false);
              setEmail(event.target.value);
            }}
          />
        </label>



        <label
          htmlFor="adress" 
          className={classNames('form__field', {'form__field--error': adressError})}
        >
          <p className="form__text">Адреса</p>
          <input 
            type="text" 
            className="form__input"
            value={adress}
            onChange={(event) => {
              setAdressError(false);
              setAdress(event.target.value);
            }}
          />
        </label>

        <label
          htmlFor="phne" 
          className={classNames('form__field', {'form__field--error': phoneError})}
        >
          <p className="form__text">Номер телефону</p>
          <input 
            type="text" 
            className="form__input"
            value={phone}
            onChange={(event) => {
              setPhoneError(false);
              numberField(event, setPhone);
            }}
          />
        </label>



        <div className="form__field--double">
          <label 
            htmlFor="index" 
            className={classNames('form__field', {'form__field--error': indexError})}
          >
            <p className="form__text">Поштовий індекс</p>
            <input 
              type="text" 
              className="form__input"
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
