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
                <div className="socials__fbtw">
                <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0" nonce="7CNEoa5s"></script>
<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Twitter Page</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="fb-page" data-href="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079" data-tabs="timeline" data-width="100" data-height="100" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079">Facebook Page</a></blockquote></div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen
