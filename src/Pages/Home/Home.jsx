
import { Link } from "react-router-dom";
import { useState } from "react";
import usePhones from "../../Hook/usePhones";

const Home = () => {

    const [search, setSearch] = useState([])

    const phones = usePhones(search);
    
    const handleMobileSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.searchText.value;
        setSearch(searchText);
    }
    
    return (
        <div>
            <form onSubmit={handleMobileSearch} className="lg:max-w-screen-sm md:max-w-lg mx-auto xl:-mt-20 px-5 md:px-0">
                <input className="w-4/5 py-[6px] text-sm md:text-lg border-b-2 border-t-2 border-l-2 border-gray-300 px-4" type="text" name="searchText" placeholder="Search Here" />
                <input className="w-1/5 rounded-tr-md rounded-br-md bg-[#eb8d22ec] border-r-2 text-white font-semibold text-sm md:text-lg py-[8px] px-2 hover:[#eb8d22ec] hover:bg-[#b67045]" type="submit" value="Search" />
            </form>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5 max-w-screen-xl mx-auto my-10 px-5">
                {
                    phones.map((phone, idx) => <div className="flex flex-col justify-center items-center border-2 shadow-lg py-3 rounded-md" key={idx}>
                        <div className="">
                            <img className="h-[212px]" src={phone?.img} alt="" />
                        </div>
                        <h2 className="text-lg font-semibold my-1">{phone?.name}</h2>
                        <h2 className="text-base font-semibold mb-1">₹Price: {phone?.price}</h2>
                        <div className="grid grid-cols-2 gap-7 text-gray-500">
                            <h2 className="text-sm font-semibold">{phone?.memory}</h2>
                            <h2 className="text-sm font-semibold">OS: {phone?.OS}</h2>

                        </div>
                        <h2 className="text-sm font-semibold text-gray-500 mr-[75px] my-2 flex justify-between gap-3 items-center"><img className="w-6" src="https://i.ibb.co/kSMx8bk/Screenshot-2023-12-21-133332-removebg-preview.png" alt="" /> <p>{phone?.processor}</p></h2>
                        <h2 className="text-sm font-semibold text-gray-500 mr-[90px] flex justify-between gap-3 items-center"><img className="w-6 h-6" src="https://i.ibb.co/xgtn44Q/Screenshot-2023-12-21-132847-removebg-preview.png" alt="" /> <p>{phone?.type}</p></h2>
                        <Link to={`/details/${phone._id}`}>
                            <button className=" hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-1.5 px-5 rounded-md mt-5">Details</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;