
export const checkLoggedIn = function() {
    return 'user' in localStorage ? true : false;
}

export const getLoggedInUserName = function() {
    return JSON.parse(localStorage.getItem( 'user' )).nickname; 
} 

export const loginUser = function(user) {
    try {
        if( !('user' in localStorage) ) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        return localStorage.getItem( 'user' ); 
    }
    catch(e) {
        return e;
    }
}

export const logoutUser = function() {
    try {
        if( !('user' in localStorage) ) {
            localStorage.removeItem('user');
            return true;
        }
    }
    catch(e) {
        return e;
    }
}
