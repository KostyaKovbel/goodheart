import classNames from 'classnames';
import './HelpTabs.scss';

type Props = {
  handleDisplay: (helpTypeToogle: string) => void; 
  displayHelp: string
}

export const HelpTabs: React.FC<Props> = ({ handleDisplay, displayHelp }) => {

  const selectedCheck = (format: string) => {
    return classNames('help__icon', {'help__icon--selected': displayHelp === format});
  };

  return (
    <div className='form__help help'>
        <div className='help__button-place'>
          <button 
            type="button" 
            className={classNames(
              'button',
              'help__button',
              {
                'button--selected': displayHelp === 'Do',
              }
              )}
            onClick={() => {
              handleDisplay('Do')
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={selectedCheck('Do')}>
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
              <circle cx="16" cy="12" r="1.5" />
            </svg>
        </button>
          <p className={classNames('help__title', { 'help__title--selected': displayHelp === 'Do' }) }>
            Зробити
          </p>
        </div>
        <div className='help__button-place'>
        <button 
            type="button" 
            className={classNames(
              'button',
              'help__button',
              {
                'button--selected': displayHelp === 'moneyHelp',
              }
              )}
            onClick={() => {
              handleDisplay('moneyHelp')

            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={selectedCheck('moneyHelp')}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.5" />
          </svg>
        </button>
          <p className={classNames('help__title', { 'help__title--selected': displayHelp === 'moneyHelp' }) }>
            Фінансова допомога
          </p>
        </div>
        <div className='help__button-place'>
        <button 
            type="button" 
            className={classNames(
              'button',
              'help__button',
              {
                'button--selected': displayHelp === 'materialHelp',
              }
              )}
            onClick={() => {
              handleDisplay('materialHelp')
            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={selectedCheck('materialHelp')}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.5" />
          </svg>
        </button>
          <p className={classNames('help__title', { 'help__title--selected': displayHelp === 'materialHelp' }) }>
            Матеріальна допомога
          </p>
        </div>
        <div className='help__button-place'>
        <button 
            type="button" 
            className={classNames(
              'button',
              'help__button',
              {
                'button--selected': displayHelp === 'volunteering',
              }
              )}
            onClick={() => {
              handleDisplay('volunteering');
            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className={selectedCheck('volunteering')}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.5" />
          </svg>
        </button>
          <p className={classNames('help__title', { 'help__title--selected': displayHelp ===  'volunteering'}) }>
            Волонтерство
          </p>
        </div>
    </div>
  );
};

