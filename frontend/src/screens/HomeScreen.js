import "./HomeScreen.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
    const [allItems, setAllItems] = useState()

    useEffect(() => {
        axios.get("http://localhost:5000/items")
        .then(items => items.data)
        .then(items => setAllItems(items))
    }, [])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Clothes</h2>
            <div className="homescreen__products">
                {/* Go through each item from the data */}
                {allItems?.map((item, id) => <Product 
                    key={item.name}
                    id={id}
                    name={item.name} 
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price} 
                    countInStock={item.countInStock}
                />)}
                

            </div>
        </div>
    );
};

export default HomeScreen
