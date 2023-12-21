import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const usePhones = (search) => {
    const [phones, setPhones] = useState([]);
    const axiosPublic = useAxios();
    useEffect(()=>{
        axiosPublic.get(`/phones?search=${search}`)
        .then(res => setPhones(res.data))
    },[axiosPublic, search])
    return phones
};

export default usePhones;