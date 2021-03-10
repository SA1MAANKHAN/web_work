import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/PrimeDay/LGWseries/LP/D11154727_LG_TopBanner_LP_PC_1500x500._CB442369035_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Milk and Honey Bottle"
            price={29.99}
            image="https://img.pixelz.com/blog/white-background-photography/product-photo-liqueur-bottle-1000.jpg?w=1000"
            rating={3}
          />
          <Product
            title="Sony PlayStation 5"
            price={629.99}
            image="https://media.direct.playstation.com/is/image/sierialto/PS5-Digital-background-hero-1023x599"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Xbox One "
            price={529.99}
            image="https://media.gamestop.com/i/gamestop/11108369/Microsoft-Xbox-Series-X-Robot-White-Wireless-Controller"
            rating={4}
          />
          <Product
            title="Barca Jersey"
            price={49.99}
            image="https://www.pngkit.com/png/full/877-8777667_nike-barcelona-home-vapor-match-shirt-barcelona.png"
            rating={5}
          />
          <Product
            title="Nike air 3000"
            price={229.99}
            image="https://s3.us-east-1.wasabisys.com/grid50/2017/12/PDgiEauw-white-background-prudct-photography-example.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            title="The Curved display"
            price={1229.99}
            image="data:image/jpeg;base64,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"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
