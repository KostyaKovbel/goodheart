import classNames from 'classnames';
import React, { useState } from 'react';
import './App.scss';
import { UserForm } from './Compontents/UserForm/UserForm';

export const App: React.FC = () => {
  const [isIndividual, setIsIndividual] = useState(true);

  return (
    <div className="page">
      <h1 className="page__title">Заповніть форму</h1>
      <div className='page__button-place'>
        <button 
          type="button"
          className={classNames(
            'page__button',
            {'page__button--selected': isIndividual }
          )}
          onClick={() => {
            if (!isIndividual) {
              setIsIndividual(true);
            }
          }}
        >
            Фіз.Особа
        </button>
        <button 
          type="button"
          className={classNames(
          'page__button',
          {'page__button--selected': !isIndividual }
        )}
        onClick={() => {
          if (isIndividual) {
            setIsIndividual(false);
          }
        }}
        >
          Юр.Особа
        </button>
      </div>
      <UserForm />
    </div>
  );
}

export default App;
