// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout'; // we'll create this

export default function App() {
  return (
    <>
      <Navbar />
      <Layout />
      <Footer />
    </>
  );
}
