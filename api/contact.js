module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Или укажите конкретный домен
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Разрешенные методы
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Разрешенные заголовки
    
    // Обработка preflight-запроса
    if (req.method === 'OPTIONS') {
      return res.status(204).end(); // Статус 204 No Content
    }
  
    // Проверка метода на POST
    if (req.method.toUpperCase() !== 'POST') {
      return res.status(405).json({ message: 'Метод не поддерживается' });
    }
  
     // Проверка наличия данных в теле запроса
     const { name, email, message } = req.body;
     if (!name || !email || !message) {
         return res.status(400).json({ message: 'Все поля обязательны' });
     }
  
    // Логируем данные
    console.log(`Получено сообщение от ${name}:`, { email, message });
  
    // Ответ с сообщением
    res.status(200).json({ message: `Спасибо за проявленный интерес, ${name}!` });
  };
  