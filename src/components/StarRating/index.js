import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon }from '../../assets/star.svg';
import {useState} from 'react';
import '../../components/Grid/styles.css'

const StyledStar = styled(StarIcon)`
  cursor: pointer;
  width: 1.25em;
  height: 1.25em;
  fill: ${props => props.selected ? "green" : "gray"};
`;

const STARS = [1,2,3,4,5];
const Star = ({ selected = false, onClick }) => {
  return(
      <StyledStar selected={selected} onClick={onClick}/>
  )
};

const StarRating = () => {

  const [starsSelected, change] = useState(0);
  // Write your code for the star rating component here. You can use the Star functional component but
  // you do not have to.
 return( <div className="star">
  {STARS.map((n, i) =>
    <Star key={i}
          selected={i < starsSelected}
          onClick={() =>change(i+1)}
   />
)}
</div>
 )
};

export default StarRating;
