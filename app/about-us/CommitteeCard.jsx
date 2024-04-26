// CommitteeCard.jsx

import React from 'react';
import styles from './AboutUs.css';
import profilepic from '../../public/images/Rectangle107.png';
import Image from "next/image";

const CommitteeCard = ({ name, position }) => {
  return (
    <div className="committee__card">
      <div className="committee__profile__container">
        <Image src={profilepic} alt="Profile" />
      </div>
      <div className="committee_profile">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default CommitteeCard;
