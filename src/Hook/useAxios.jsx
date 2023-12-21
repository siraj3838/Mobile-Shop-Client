import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mobile-shop-server-black.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;