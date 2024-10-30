import { Button, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const FormContainer = styled.main`
  width: 100%;
  height: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-top: #c6c2c2 1px solid;
  border-bottom: #c6c2c2 1px solid;
`;

const FormWrapper = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 10px;
    width: 260px;
    height: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-family: Inter;
  }
  &.small .MuiInputBase-root {
    max-height: 40px;
  }
  &.large .MuiInputBase-root {
    max-height: 80px;
    resize: vertical;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #ddd;
    }
    &:hover fieldset {
      border-color: #aaa;
    }
    &.Mui-focused fieldset {
      border-color: #333;
      border-width: 1px;
    }
  }

  & .MuiInputLabel-root {
    color: #555;

    &.Mui-focused {
      color: #333;
    }
  }
`;

const StyledInputLabel = styled(InputLabel)`
  text-align: left;
  margin-left: 10px;
  font-family: Inter;
`;

const FormTitle = styled.h1`
  font-size: 72px;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: -2.16px;
  color: #413e3e;
  margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
  && {
    width: 260px;
    height: 40px;
    background-color: #333;
    color: #fff;
    font-family: Inter;
    text-transform: none;
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    &:hover {
      background-color: #555;
    }
  }
`;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const message = localStorage.getItem(responseMessage);
    if (message) {
      setResponseMessage(message);
      localStorage.removeItem('responseMessage');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://contact-form-theta-three.vercel.app/api/contact',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.status === 200) {
        // navigate('/contact/confirmation');
        localStorage.setItem('responseMessage', response.data.message);
        window.location.reload();
        setResponseMessage(`Спасибо за проявленный интерес, ${formData.name}`);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setResponseMessage('Ошибка отправки формы. Попробуйте еще раз.');
    }
    // console.log(formData);
  };
  return (
    <FormContainer>
      {isSubmitted ? (
        <FormTitle>{responseMessage}</FormTitle>
      ) : (
        <>
          <FormTitle>Only CTA on the page</FormTitle>
          <FormWrapper>
            <form onSubmit={hadleSubmit}>
              <StyledInputLabel shrink>Name</StyledInputLabel>
              <StyledTextField
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="small"
                required
              />
              <StyledInputLabel shrink>Email</StyledInputLabel>
              <StyledTextField
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                required
                className="small"
              />
              <StyledInputLabel shrink>Message</StyledInputLabel>
              <StyledTextField
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                multiline
                rows={3}
                required
                className="large"
              />
              <StyledButton type="submit">Submit</StyledButton>
            </form>
          </FormWrapper>
        </>
      )}
    </FormContainer>
  );
}
