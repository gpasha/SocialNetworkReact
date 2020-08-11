import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "9d387ec6-92f6-4053-8127-a73a3f677149"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => response.data);
    }
}

export const followAPI = {
    follow(userId){
        return axiosInstance.post('follow/' + userId).then( response => response.data);
    },
    unfollow(userId){
        return axiosInstance.delete('follow/' + userId).then( response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get('profile/' + userId).then( response =>  response.data);
    },
    getStatus(userId) {
        return axiosInstance.get('profile/status/' + userId).then( response => response.data);
    },
    updateStatus(status) {
        return axiosInstance.put('profile/status', { status: status });
    }
}

export const authAPI = {
    authorize() {
        return axiosInstance.get('auth/me').then( response => response.data);
    },
    login(email, password, rememberMe = false) {
        return axiosInstance.post('auth/login', { email,password,rememberMe } ).then( response => response.data);
    },
    logout() {
        return axiosInstance.delete('auth/login').then( response => response.data);
    }
}






