module.exports = (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Метод не поддерживается' });
    }
  
    const { name, email, message } = req.body;
  
    // данные в консоль
    console.log(`Получено сообщение от ${name}:`, {
      email,
      message,
    });
  
    // ответ с сообщением
    res.status(200).json({ message: `Спасибо за проявленный интерес, ${name}!` });
  };