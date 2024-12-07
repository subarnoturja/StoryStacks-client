import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavoriteBook from "../components/FavoriteBook";
import PromoBanner from "../components/PromoBanner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BestSellerBooks />
           <FavoriteBook></FavoriteBook>
           <PromoBanner></PromoBanner>
        </div>
    );
};

export default Home;