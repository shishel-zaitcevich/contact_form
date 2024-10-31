import { Button, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const useRem = (px: number): string => `${px / 16}rem`;

const FormContainer = styled.main`
  width: 100%;
  height: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${useRem(20)};
  background-color: #f5f5f5;
  border-top: #c6c2c2 1px solid;
  border-bottom: #c6c2c2 1px solid;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const FormWrapper = styled.div`
  max-width: ${useRem(320)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: ${useRem(20)};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 10px;
    width: ${useRem(260)};
    height: 100%;
    margin-bottom: ${useRem(20)};
    font-size: ${useRem(16)};
    font-family: Inter;
  }
  &.small .MuiInputBase-root {
    max-height: ${useRem(40)};
  }
  &.large .MuiInputBase-root {
    max-height: ${useRem(80)};
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
  margin-left: ${useRem(10)};
  font-family: Inter;
`;

const FormTitle = styled.h1`
  font-size: ${useRem(72)};
  font-family: Inter;
  font-weight: 700;
  letter-spacing: ${useRem(-2.16)};
  color: #413e3e;
  margin-bottom: ${useRem(40)};
  @media (max-width: 768px) {
    margin-bottom: ${useRem(20)};
    font-size: ${useRem(32)};
  }
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

  // useEffect(() => {
  //   const message = localStorage.getItem(responseMessage);
  //   if (message) {
  //     setResponseMessage(message);
  //     localStorage.removeItem('responseMessage');
  //     console.log('ContactPage загружен');
  //   }
  // }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://contact-form-theta-three.vercel.app/contact/api/contact',
        formData,
        // const response = await axios.post(
        //   'http://localhost:5173/contact/api/contact',
        //   formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.status === 200) {
        // navigate('/contact/confirmation');
        // localStorage.setItem('responseMessage', response.data.message);
        // window.location.reload();
        setResponseMessage(`Спасибо за проявленный интерес, ${formData.name}`);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setResponseMessage('Ошибка отправки формы. Попробуйте еще раз.');
    }
    console.log(formData);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       'https://contact-form-theta-three.vercel.app/contact/api/contact',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       setResponseMessage(`Спасибо за проявленный интерес, ${formData.name}`);
  //       setIsSubmitted(true);
  //     } else {
  //       throw new Error(`Ошибка: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error('Ошибка отправки формы:', error);
  //     setResponseMessage('Ошибка отправки формы. Попробуйте еще раз.');
  //   }

  //   console.log(formData);
  // };

  return (
    <FormContainer>
      {isSubmitted ? (
        <FormTitle>{responseMessage}</FormTitle>
      ) : (
        <>
          <FormTitle>Only CTA on the page</FormTitle>
          <FormWrapper>
            <form onSubmit={handleSubmit}>
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
