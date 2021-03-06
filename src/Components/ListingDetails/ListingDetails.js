import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetails.css'

const ListingDetails = ({areaid, listingid, name, address, beds, baths, costPerNight, features, handleFarovites}) => {
  const handleFarovite = () => {
    handleFarovites(areaid, listingid)
  }

  return (
    <section className="listingDetails">
      <h1 className="propertyDetailsName">{name}</h1>
      <p className="propertyDetailsAddress">{address.street}, CO, {address.zip}</p>
      <ul className="propertyDetails">
        <li>{beds} Beds |</li>
        <li>{baths} Baths |</li>
        <li>{costPerNight.toLocaleString("en-US", {style: "currency", currency: "USD"})} Per Night |</li>
        <li className="propertyFeatures">{features.join(', ')}</li>
      </ul>
      <button className="favoritePropertyBtn" onClick={ handleFarovite }>Favorite</button>
    </section>
  )
}


export default ListingDetails;

ListingDetails.propTypes = {
  areaid: PropTypes.number,
  listingid: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  beds: PropTypes.number,
  baths: PropTypes.number,
  costPerNight: PropTypes.number,
  features: PropTypes.array,
  handleFarovites: PropTypes.func,
};
