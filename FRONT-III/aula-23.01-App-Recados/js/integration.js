const axiosClient = axios.create({
    baseURL: 'https://api-recados-growdev-6f4s.onrender.com',
});


async function signup(email, password) {
    try {
        const response = await axiosClient.post('/signup', {
            email: email,
            password: password
        });

        return response.data;
    } catch (error) {
        return error.response.data;
    }
}


async function signin(email, password) {
    try {
        const response = await axiosClient.post('/signin', {
            email: email,
            password: password
        });

        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
