import Header from '@/components/Header';
import RealTest from '@/components/RealTest';
import Section from '@/components/Section';
import Standarts from '@/components/Standarts';
import Video from '@/components/Video';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Solutions App</title>
        <meta
          name='description'
          content='Первая интеллектуальная платформа для подготовки к тестам Talent Q'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Header />
        <Section />
        <Video />
        <RealTest />
        <Standarts />
      </>
    </>
  );
}
