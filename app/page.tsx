import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';

export default function Home() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Header label="Home" />
      </Layout>
    </>
  )

}
