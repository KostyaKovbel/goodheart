import { useEffect, useState } from 'react';
import './Card.scss'

type Props = {
  resetTogler: boolean,
};

export const Card: React.FC<Props> = ({ resetTogler }) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const [nums1, setNums1] = useState('')
  const [nums2, setNums2] = useState('')
  const [nums3, setNums3] = useState('')
  const [nums4, setNums4] = useState('')



  const [CVV, setCVV] = useState('');
  const [dateExpired, setDateExpired] = useState('');

  const reset = () => {
    setNums1('')
    setNums2('')
    setNums3('')
    setNums4('')
    setCVV('')
    setDateExpired('')
  }

  useEffect(() => {
    reset();
  }, [resetTogler]);

  const numberField = (
    event: React.ChangeEvent<HTMLInputElement>, 
    changer: (param: string) => void
    ) => {
      if (event.target.value.split('').every(char => numbers.includes(char))) {
        changer(event.target.value);
      }
  }

  const formatDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;

    if (date.length > 2 && !date.includes('/')) {
      setDateExpired(`${date.slice(0, 2)}/${date.slice(2)}`)
    } else {
      setDateExpired(date);
    }
  }

  return (
    <div className="card">
      <h6 className="card__title">Введіть наступні данні</h6>

      <div className="card__info" onSubmit={(event) => {
        event.preventDefault();
        reset();
      }}>
        <p className="card__info-title">Номер карти</p>
        <div className="card__number">
          <input 
            className="card__field card__number-field" 
            type="text"
            required
            maxLength={4}
            minLength={4}
            value={nums1}
            onChange={(event) => {
              numberField(event, setNums1);
            }}
          />
          <input 
            className="card__field card__number-field" 
            type="text"
            required
            minLength={4}
            maxLength={4}
            value={nums2}
            onChange={(event) => {
              numberField(event, setNums2);
            }}
          />
          <input 
            className="card__field card__number-field" 
            type="text"
            required
            minLength={4}
            maxLength={4}
            value={nums3}
            onChange={(event) => {
              numberField(event, setNums3);
            }}
          />
          <input 
            className="card__field card__number-field" 
            type="text" 
            required
            minLength={4}
            maxLength={4}
            value={nums4}
            onChange={(event) => {
              numberField(event, setNums4);
            }}
          />
        </div>

        <div className="card__security">
          <div>
            <p className="card__info-title">Термін дії</p>
            <input 
              className="card__field card__security-field" 
              type="text" 
              required
              minLength={5}
              maxLength={5}
              value={dateExpired}
              onChange={(event) => {
                formatDate(event);
              }}
            />
          </div>
  
          <div>
            <p className="card__info-title">CVC/CVV</p>
            <input 
              className="card__field card__security-field" 
              type="text" 
              required
              minLength={3}
              maxLength={3}
              value={CVV}
              onChange={(event) => {
                numberField(event, setCVV);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
};