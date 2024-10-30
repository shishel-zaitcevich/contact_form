module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Или укажите конкретный домен
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Разрешенные методы
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Разрешенные заголовки
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end(); // Отвечаем на preflight-запрос
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Метод не поддерживается' });
    }
  
    const { name, email, message } = req.body;
  
    console.log(`Получено сообщение от ${name}:`, { email, message });
  
    res.status(200).json({ message: `Спасибо за проявленный интерес, ${name}!` });
  };
  