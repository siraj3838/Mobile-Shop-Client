// import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";

const Home = () => {
    const [phones, setPhones] = useState([])
    // const {data} = useQuery({
    //     queryKey: ['order'],
    //     queryFn: () =>{

    //     }
    // })
    // console.log(data);

    useEffect(() => {
        fetch('allPhone.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    console.log(phones);
    return (
        <div>
            <form className="lg:max-w-screen-sm md:max-w-lg mx-auto xl:-mt-20 px-5 md:px-0">
                <input className="w-4/5 py-[6px] text-sm md:text-lg border-b-2 border-t-2 border-l-2 border-gray-300 px-4" type="text" name="searchText" placeholder="Search Here" />
                <input className="w-1/5 rounded-tr-md rounded-br-md bg-[#eb8d22ec] border-r-2 text-white font-semibold text-sm md:text-lg py-[8px] px-2 hover:[#eb8d22ec] hover:bg-[#b67045]" type="submit" value="Search" />
            </form>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3 max-w-screen-xl mx-auto my-10">
                {
                    phones.map((phone, idx) => <div className="flex flex-col justify-center items-center border-2 shadow-lg py-3" key={idx}>
                        <div className="">
                            <img className="h-[212px]" src={phone.img} alt="" />
                        </div>
                        <h2>{phone.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;