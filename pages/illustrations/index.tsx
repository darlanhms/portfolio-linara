import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const IllustrationsPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Ilustrações</title>
      </Head>
      <Header />
      <div>conteudo vai aqui</div>
      <Footer />
    </>
  );
};

export default IllustrationsPage;
