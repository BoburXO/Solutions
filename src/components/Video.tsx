import Image from 'next/image';
import React from 'react';

const Video = () => {
  return (
    <>
      <div className='video'>
        <div className='container'>
          <h1 className='video__title'>Изучите видеоуроки</h1>
          <div className='video__wrapper'>
            <div className='video__mp4'>
              <iframe
                src='https://www.youtube.com/embed/TDHRWZGLQdc?si=tVxOXEnN3FL6uhP4'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
              <div className='screen'>
                <Image src='/screen.svg' alt='' fill />
                <p>Удобно смотреть в любого устройства</p>
              </div>
            </div>
            <div className='video__contents'>
              <div className='video__twinks'>
                <Image
                  className='twinks_v'
                  src={'/v1.svg'}
                  alt='video-1'
                  fill
                />
                <p>Как успевать <br /> в отведенное время?</p>
              </div>
              <div className='video__twinks'>
                <Image
                  className='twinks_v'
                  src={'/v1.svg'}
                  alt='video-1'
                  fill
                />
                <p>Что читать сначала: <br /> текст или вопрос?</p>
              </div>
              <div className='video__twinks'>
                <Image
                  className='twinks_v'
                  src={'/v1.svg'}
                  alt='video-1'
                  fill
                />
                <p>Как быстро находить верные ответы?</p>
              </div>
              <div className='video__twinks'>
                <Image
                  className='saksafon'
                  src={'/saksafon.svg'}
                  alt='video-1'
                  fill
                />
                <p className='saksafon__txt'>
                  Об этом и не только расскажет
                  <span> практикующий эксперт Антон Добрышин.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
