import React from 'react';

function Tile({img, altText, title, children}) {
    return (
        <section>
            {img && <img src={img} alt={altText}/>}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;