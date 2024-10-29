import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="contact" element={ContactPage} /> */}
        {/* <Route path="contact/confirmation" element={ConfirmationPage} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
