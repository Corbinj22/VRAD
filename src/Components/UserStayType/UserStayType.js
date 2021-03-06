import React from 'react';
import PropTypes from 'prop-types';
import './UserStayType.css';

const UserStayType = ({ getPurpose }) => {
  const handleChange = (event) => {
    event.preventDefault();
    getPurpose(event.target.id);
  }

  return (
    <section className="userStayTypeWrapper">
      <p className="stayTypeHeader">Select a Booking Type</p>
      <section className="stayTypes">
        <button className="buisnessBtn" id="buisness" onClick={ handleChange }>
          Buisness
          <img src="https://image.flaticon.com/icons/svg/857/857676.svg" id="buisness" />
        </button>
        <button className="vacationBtn" id="vacation" onClick={ handleChange }>
          Vacation
          <img className="vacationBtnImg" src="https://image.flaticon.com/icons/svg/2905/2905677.svg" id="vacation" />
        </button>
        <button className="otherBtn" id="other" onClick={ handleChange }>
          Other
          <img className="otherBtnImg" src="https://image.flaticon.com/icons/svg/684/684834.svg" id="other" />
        </button>
      </section>
    </section>
  );
}

export default UserStayType;

UserStayType.propTypes = {
  getPurpose: PropTypes.func,
};
