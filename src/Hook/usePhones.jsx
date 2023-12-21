import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const usePhones = (search) => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxios();
    useEffect(() => {
        axiosPublic.get(`/phones?search=${search}`)
            .then(res => {
                setPhones(res.data)
                setLoading(false);
            })
    }, [axiosPublic, search])
    
    if(loading){
        return <div className="max-w-screen-xl mx-auto flex justify-center mt-28"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return phones
};

export default usePhones;