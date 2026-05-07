const store = require('../data/store');

const getAllUsers = (req, res) => {
    res.json(store.users);
};

const getUserById = (req, res) => {
    const user = store.users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    
    const newUser = {
        id: store.getNextUserId(),
        name,
        email
    };
    
    store.users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = store.users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const { name, email } = req.body;
    
    store.users[userIndex] = {
        ...store.users[userIndex],
        name: name || store.users[userIndex].name,
        email: email || store.users[userIndex].email
    };
    
    res.json(store.users[userIndex]);
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = store.users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    store.users.splice(userIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
