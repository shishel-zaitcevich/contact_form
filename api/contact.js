module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end(); 
  }

  console.log(`Метод запроса: ${req.method}`); // Логирование метода запроса

  if (req.method.toUpperCase() !== 'POST') {
    return res.status(405).json({ message: 'Метод не поддерживается' });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
       return res.status(400).json({ message: 'Все поля обязательны' });
   }

  console.log(`Получено сообщение от ${name}:`, { email, message });
  res.status(200).json({ message: `Спасибо за проявленный интерес, ${name}!` });
};