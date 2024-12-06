import BannerCard from "./BannerCard";

const Banner = () => {
    return (
        <div>
           <div className="flex flex-col md:flex-row justify-around items-center py-28 bg-blue-500/20 rounded-xl w-full">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-bold leading-snug text-black">Turn the Page, Start the <span className="text-blue-700">Adventure</span></h2>
                <p className="md: w-4/5 font-semibold">Browse our carefully curated collection of books and uncover hidden treasures waiting to be discovered. Whether you are seeking gripping novels, insightful non-fiction, or timeless classics, we have something for every reader. Find your next favorite story and let the journey begin today.</p>
                <div>
                    <input type="search" placeholder="Search a book" className="py-2 px-2 rounded-s-sm border outline-none"/>
                    <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-full">Search</button>
                </div>
            </div>
            {/* Right Side */}
            <div>
                <BannerCard></BannerCard>
            </div>
           </div>
        </div>
    );
};

export default Banner;