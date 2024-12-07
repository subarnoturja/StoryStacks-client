import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavoriteBook from "../components/FavoriteBook";
import OtherBooks from "../components/OtherBooks";
import PromoBanner from "../components/PromoBanner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BestSellerBooks />
           <FavoriteBook></FavoriteBook>
           <PromoBanner></PromoBanner>
           <OtherBooks></OtherBooks>
        </div>
    );
};

export default Home;