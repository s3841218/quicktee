// Rensburg, L., 2020. MERN e-commerce build. [video] Available at: <https://www.youtube.com/watch?v=0divhP3pEsg&t=3215s> [Accessed 12 April 2022].
// Code adapted from Lloyd Rensburg
import "./HomeScreen.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";


const HomeScreen = () => {
    const [allItems, setAllItems] = useState()

    useEffect(() => {
        axios.get("http://testapp-env.eba-rxqfwqda.ap-southeast-2.elasticbeanstalk.com/items")
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

{/* Developers.facebook.com. 2022. Facebook for Developers. [online] Available at: <https://developers.facebook.com/> [Accessed 18 April 2022]. */}
                <div className="socials__fbtw">
                <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0" nonce="7CNEoa5s"></script>

<div class="fb-page" data-href="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079" data-tabs="timeline" data-width="100" data-height="100" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Quicktee-clothing-assignment-112970678055079">Facebook Page</a></blockquote></div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen
