import ShopMainDisplayProducts from "./ShopMainDisplayProducts";
import ShopMainSereach from "./ShopMainSereach";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";


function ShopMain(){
    const {productList} = useContext(DataContext);
    console.log(productList)
    const listToRender = productList
    console.log(listToRender)

    return(
        <div className="ShopWrapper">
            <ShopMainSereach prop={listToRender}></ShopMainSereach>
            <ShopMainDisplayProducts productListToRender={listToRender}></ShopMainDisplayProducts>
       </div>
    )
} export default ShopMain;