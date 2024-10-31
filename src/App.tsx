import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage/HomePage';
import { ContactFormPage } from './components/pages/ContactPage/ContactFormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactFormPage />} />
        {/* <Route path="contact/confirmation" element={ConfirmationPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
