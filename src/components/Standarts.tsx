import Image from 'next/image';
import React from 'react';

const Standarts = () => {
  return (
    <>
      <div className='container'>
        <div className='standard'>
          <h1 className='standard__title'>Разберите нестандартные ситуации</h1>
          <div className='standard__wrapper'>
            <div className='standard__card'>
              <h3>
                Ноутбук начал <span>перезагружаться</span> <br /> прямо посреди теста
              </h3>
              <Image src='/err1.svg' alt='' fill />
            </div>
            <div className='standard__card'>
              <h3>
                Не удается запустить тестирование —{' '}
                <span>техническая ошибка</span>
              </h3>
              <Image src='/err2.svg' alt='' fill />
            </div>
            <div className='standard__card'>
              <h3>
                Ноутбук начал <span>перезагружаться</span> <br /> прямо посреди теста
              </h3>
              <Image src='/err1.svg' alt='' fill />
            </div>
            <div className='standard__card'>
              <h3>
                Не удается запустить тестирование —{' '}
                <span>техническая ошибка</span>
              </h3>
              <Image src='/err2.svg' alt='' fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standarts;
