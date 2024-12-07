import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavouriteBook from "../components/FavoriteBook";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BestSellerBooks />
           <FavouriteBook></FavouriteBook>
        </div>
    );
};

export default Home;