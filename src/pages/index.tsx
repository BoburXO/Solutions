import Header from '@/components/Header';
import Section from '@/components/Section';
import Video from '@/components/Video';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Solutions App with bobur and abdurazzoq</title>
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
      </>
    </>
  );
}
