 import Head from 'next/head'
import AddTransaction from '../components/AddTransaction';
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tile from "../components/Tile";
import TransactionHistory from '../components/TransactionHistory';
import TransactionList from '../components/TransactionList';

export default function Home() {
  return (
    <div className='flex flex-col justify-center  min-h-screen py-2 px-2  bg-slate-500-gray-600 '>
      <Head>
        <title>Frontend Boilerplate React</title>
      </Head>
      <main className='flex flex-col  max-w-full'>
        <Hero />
        {/* <Tile /> */}
        {/* <AddTransaction/>   */}

      </main>
      <Footer />
    </div>
  )
}
