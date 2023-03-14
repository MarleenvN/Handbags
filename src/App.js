import React from 'react';
import './App.css';
import Product from "./components/Product/Product";
import Tile from "./components/Tile/Tile";
import Button from "./components/Button/Button";
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

          <nav>
              <Button isDisabled={false} clickHandler={() => console.log("To the collection!")}>
                  To the collection
              </Button>
              <Button isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>
                  Shop all bags
              </Button>
              <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}>
                  Pre-orders
              </Button>
          </nav>

        <main>
            <Product
                label="Best seller"
                img={bag_one}
                altText="roze tas"
                nameBag="The handy bag"
                price="€400,-"
            />
            <Product
                label="Best seller"
                img={bag_two}
                altText="stylish"
                nameBag="The stylish bag"
                price="€250,-"
            />
            <Product
                label="New collection"
                img={bag_three}
                title="The simple bag"
                price={300}
            />
            <Product
                label="New collection"
                img={bag_four}
                title="The trendy bag"
                price={150}
            />
        </main>

        <footer>
            <Tile title="the brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus facere inventore nulla quo sunt!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facilis illum iure reiciendis totam! Accusantium aspernatur aut dolores excepturi ipsa modi nihil, quaerat quas veniam.</p>
            </Tile>
            <Tile
                img={brand}
                altText="The brand logo"
            >
            </Tile>
            <Tile
                img={our_story}
                altText="Our story"
            >
            </Tile>
            <Tile title="our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus facere inventore nulla quo sunt!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facilis illum iure reiciendis totam! Accusantium aspernatur aut dolores excepturi ipsa modi nihil, quaerat quas veniam.</p>
            </Tile>


        </footer>

      </>
  );
}

export default App;



