module.exports = (req, res) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Метод не поддерживается' });
        }

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Все поля обязательны для заполнения.' });
        }

        console.log(`Получено сообщение от ${name}:`, {
            email,
            message,
        });

        res.status(200).json({ message: `Спасибо за проявленный интерес, ${name}!` });
    } catch (error) {
        console.error('Ошибка в API:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера.' });
    }
};