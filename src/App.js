import React from 'react';


// components
import FirstPage from './components/FirstPage';
import Why from './components/Why';
import Services from './components/Services';
import Instant from './components/Instant';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import News from './components/News';
import Comment from './components/Comment';
import Logoes from './components/Logoes';
import Advertising from './components/Advertising';
import Footer from './components/Footer';
const App = () => {
  return (

    <div dir="rtl">
        <FirstPage />
        <Why />
        <Services />
        <Instant />
        <News />
        <Comment />
        <Logoes />
        <Advertising />
        <Footer />
    </div>
  );
};

export default App;


