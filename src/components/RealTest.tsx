import Image from 'next/image';
import React from 'react';

const RealTest = () => {
  return (
    <>
      <div className='real_test'>
        <div className='container'>
          <div className='real__wrapper'>
            <div className='real__img'>
              <Image src='/test-image.svg' alt='Test Image' fill />
            </div>
            <div className='real__contents'>
              <h1 className='real__title'>Попробуйте реальные тесты</h1>
              <p className='real__paragraph'>
                Наши и реальные тесты идентичны по сложности, тематике и формату
                вопросов.
              </p>
              <button className='real__btn'>
                Пройти тест
                <svg
                  width='64'
                  height='45'
                  viewBox='0 0 64 45'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='5.81931' cy='5.81931' r='5.81931' fill='white' />
                  <circle
                    cx='5.81931'
                    cy='22.1133'
                    r='5.81931'
                    fill='#FFB5AB'
                  />
                  <circle
                    cx='5.81931'
                    cy='38.4072'
                    r='5.81931'
                    fill='#FFB5AB'
                  />
                  <rect
                    x='14.7812'
                    y='3.83594'
                    width='49.2188'
                    height='3.9375'
                    rx='1.96875'
                    fill='white'
                    className='circle_1'
                  />
                  <rect
                    x='14.7812'
                    y='19.8359'
                    width='49.2188'
                    height='3.9375'
                    rx='1.96875'
                    fill='#FFB5AB'
                  />
                  <rect
                    x='14.7812'
                    y='36.8359'
                    width='49.2188'
                    height='3.9375'
                    rx='1.96875'
                    fill='#FFB5AB'
                  />
                  <path
                    d='M4 6.53025L5.61659 8.14684L8.58033 3.83594'
                    stroke='#FC6652'
                    strokeWidth='1.07772'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTest;
