import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../Hook/useAxios";
import { IoReturnUpBackSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const PhoneDetails = () => {
    const axiosPublic = useAxios();
    const [nowPhone, setNowPhone] = useState({});
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        axiosPublic.get('/allPhones')
            .then(res => {
                // console.log(res.data);
                const findPhone = res?.data?.find(phone => phone._id == id)
                setNowPhone(findPhone);
            })
    }, [axiosPublic, id])
    // console.log(nowPhone);
    const buyNowHandle = () => {
        toast.success('Dear This Update Come Soon')
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Helmet>
                <title>
                    Mobile Details || {nowPhone?.name ? nowPhone.name : ''}
                </title>
            </Helmet>
            <h2 className="text-3xl font-semibold lg:-mt-20 text-center bg-gradient-to-r from-orange-500 to-orange-200 text-transparent bg-clip-text">{nowPhone?.name}</h2>
            <div className="max-w-screen-xl mx-auto mt-7 px-5">
                <Link to={'/'}>
                    <button className="text-4xl bg-base-300 px-4 rounded-lg text-orange-500">
                        <IoReturnUpBackSharp></IoReturnUpBackSharp>
                    </button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 my-10 lg:my-16 max-w-screen-xl mx-auto px-5 lg:px-0">
                <div className="lg:col-span-2">
                    <img className="w-full md:h-40 lg:h-80" src={nowPhone?.img} alt="" />
                </div>
                <div className="col-span-2 px-6 space-y-1.5">
                    <h2 className="md:text-2xl text-xl lg:text-3xl font-medium">Product Information</h2>
                    <hr className="pb-4" />
                    <h2 className="text-xl font-medium">Product Name: {nowPhone?.name}</h2>
                    <h2 className="font-medium text-lg">Memory: {nowPhone?.memory}</h2>
                    <h4 className="font-medium text-lg">Version: {nowPhone?.OS}</h4>
                    <h4 className="font-medium text-lg">Processor: {nowPhone?.processor}</h4>
                    <h4 className="font-medium text-lg">Type: {nowPhone?.type}</h4>
                    <h4 className="font-medium text-lg">Total Price: <span className="text-lg">₹{nowPhone?.price}</span></h4>
                    <button onClick={buyNowHandle} className="hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 w-2/4 rounded-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;