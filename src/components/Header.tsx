import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className='container'>
          <nav className='nav'>
            <Link href={'/'} className='nav__img'>
              <Image src='/logo.svg' alt='Logo site' fill />
            </Link>
            <Link href={'/login'} className='nav__btn'>
              <button>Вход</button>
            </Link>
          </nav>
          <div className='hero'>
            <div className='hero__contents'>
              <h1 className='hero__title'>
                Первая интеллектуальная платформа для подготовки к тестам
                <span> Talent Q</span>
              </h1>
              <p className='hero__text'>от эксперта Антона Добрышина</p>

              <div className='hero__btns'>
                <div className='hero__twink twink'>
                  <button>Начать сейчас</button>
                  <p>Время - деньги</p>
                </div>
                <div className='hero__twink2 twink'>
                  <button>Подробнее</button>
                  <p>Формула успеха</p>
                </div>
              </div>
            </div>
            <div className='hero__image'>
              <img src={'/hero.svg'} alt='' />
            </div>
          </div>
        </div>
        <div className='arrow'>
          <Image src='/arrow.svg' alt='Arrow' fill />
        </div>
      </header>
      <div className='line'></div>
    </>
  );
};

export default Header;
