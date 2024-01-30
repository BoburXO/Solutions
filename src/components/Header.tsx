import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useIsClient } from 'usehooks-ts';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  height: 450,
  bgcolor: '#fff',
  border: '3px solid #FC6652  ',
  boxShadow: 24,
  borderRadius: '20px',
  p: 3,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isClient = useIsClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('img', e.target[0].value);
    localStorage.setItem('name', e.target[1].value);
    window.location.reload();
  };

  if (isClient) {
    return (
      <>
        <header>
          <div className='container'>
            <nav className='nav'>
              <Link href={'/'} className='nav__img'>
                <Image src='/logo.svg' alt='Logo site' fill />
              </Link>
              <div className='nav__btn'>
                {!localStorage.getItem('img') ? (
                  <button onClick={handleOpen}>Вход</button>
                ) : (
                  <Tooltip title='Log Out'>
                    <Image
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                      className='ava'
                      src={localStorage.getItem('img')!}
                      alt='AVA'
                      fill
                    />
                  </Tooltip>
                )}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
                >
                  <Box sx={style}>
                    <div className='basic__modal'>
                      <Image src='/favicon.ico' alt='Logo site' fill />
                      <h2>Solutions</h2>
                      <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Фото' required />
                        <input type='text' placeholder='Имя' required />
                        <button type='submit'>Oтправить</button>
                      </form>
                    </div>
                  </Box>
                </Modal>
              </div>
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
              <div className='mob_btn'>
                <button>Начать сейчас</button>
                <p>Время - деньги</p>
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
  }
};

export default Header;
