import BestSellingShowcase from "../Components/Home/BestSelingShowcase"
import BottomMain from "../Components/Home/BottomMain"
import CustomerReviews from "../Components/Home/CustomerReviews"
import DiscountBanner from "../Components/Home/DiscountBanner"
import FoodCat from "../Components/Home/FoodCat"
import TopMain from "../Components/Home/TopMain"
import TrendingProducts from "../Components/Home/TrendingProducts"

const Home = () =>{
    return(
        <div>
            <TopMain></TopMain>
            <BottomMain></BottomMain>
            <BestSellingShowcase></BestSellingShowcase>
            <FoodCat></FoodCat>
            <DiscountBanner></DiscountBanner>
            <TrendingProducts></TrendingProducts>
            <CustomerReviews></CustomerReviews> 
        </div>
    )
} 
export default Home