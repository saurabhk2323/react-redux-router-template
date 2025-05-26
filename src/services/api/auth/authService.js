const authService = {
    // mocking api call
    login: async (username, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        } else {
            throw new Error('Invalid username or password');
        }
    },
    register: async (userData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(u => u.username === userData.username);
        if (userExists) {
            throw new Error('Username already exists');
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        return userData;
    },
    logout: () => {
        localStorage.removeItem('currentUser');
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}

export default authService;