import React from 'react';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const BeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

function SingleBeer({ beer }) {
  const rating = Math.round(beer.rating.average);

  return (
    <BeerStyles>
      <h3>{beer.name}</h3>
      <img src={beer.image} alt={beer.name} />
      {beer.price}
      <p title={`${rating} out of 5 stars`}>
        {`⭐`.repeat(rating)}
        <span style={{ filter: `grayscale(100%)` }}>
          {`⭐`.repeat(5 - rating)}
        </span>
        <span>({beer.rating.reviews})</span>
      </p>
    </BeerStyles>
  );
}

export default function BeerList({ beers }) {
  return (
    <BeerGridStyles>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerGridStyles>
  );
}
