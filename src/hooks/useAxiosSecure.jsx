import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        // Replace with your token
        // Add any additional headers here
    }
});

const useAxiosSecure = () => {
    
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, (error) => {
            if (error.response.status === 401) {
                console.log("Logout User");
            }
            return Promise.reject(error); // Important to reject the promise to avoid unhandled rejections
        });
    }, []);

    return axiosSecure;
};

export default useAxiosSecure;
