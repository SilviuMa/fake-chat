import axios from 'axios';
export const checkLoggedIn = async function() {
    return axios.post('/checkIfLoggedIn', {})
      .then(resp => {
        return resp.data.data;
    }).catch(() => {
        return {
            error: true,
            message: 'An error has occured!'
        }
    });
}

export const loginUser = async function(nickname) {
    return axios.post('/login', {
        nickname  
    }).then(resp => {
        return resp.data;
    }).catch(() => {
        return {
            error: true,
            message: 'An error has occured!'
        }
    });
}

export const logoutUser = async function() {
    return axios.post('/logout', {})
    .then(resp => {
        return resp.data;
    }).catch(() => {
        return {
            error: true,
            message: 'An error has occured!'
        }
    });
}
