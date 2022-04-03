import classNames from 'classnames';
import { Card } from '../Card/Card';
import './Payment.scss'
import '../../utility/button.scss';
import { useState } from 'react';

type Props = {
  resetTogler: boolean,
};

export const Payment: React.FC<Props> = ({ resetTogler }) => {
  const [isVisaVisible, setIsVisaVisible] = useState(false);
  const [isPrivatVisible, setIsPrivatVisible] = useState(true);


  const resetDisplay = () => {
    setIsVisaVisible(false)
    setIsPrivatVisible(false)
  }

  return (
    <div className="payment">
      <div className="payment__type-section">
        <h6 className="payment__title">
          Спосіб оплати
        </h6>
        <div className="payment__buttons-place">
          <button 
            type="button"  
            className={classNames(
              'payment__button', 
              { 'button--selected': isVisaVisible }
            )}
            onClick={() => {
              resetDisplay();
              setIsVisaVisible(!isVisaVisible);
            }}
          >
            Картка Visa/MasterCard
          </button>
          <button 
            type="button"  
            className={classNames('payment__button', { 'button--selected': isPrivatVisible })}
            onClick={() => {
              resetDisplay();
              setIsPrivatVisible(!isPrivatVisible);
            }}
          >
            Приват24
          </button>
          <button type="button" className="payment__button">
            Термінал України
          </button>
          <button type="button" className="payment__button">
            WebMoney
          </button>
          <button type="button" className="payment__button">
            PayPal
          </button>
        </div>
      </div>

      <div >
        {isPrivatVisible && <Card resetTogler={resetTogler} />}
        {isVisaVisible && <Card resetTogler={resetTogler} />}
      </div>
    </div>
  )
}