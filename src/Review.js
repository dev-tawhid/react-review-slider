import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // console.log(people);
  const [index,setIndex] = useState(0);
  const{id,name,job,image,text} = people[index]; 

  const checkNumber = (number) =>{
    if(number > people.length-1){
      return 0;
    }
    if(number < 0){
      return people.length-1;
    }

    return number;
  }

  const nextPerosn = () =>{
    setIndex((index) =>{
      let nexIndex = index  + 1;
      return  checkNumber (nexIndex);
    })
  }
  const prevPerson = () =>{
    setIndex((index) =>{
      let nexIndex = index  - 1;
      return checkNumber(nexIndex) ;
    })
  }

  return <article className="review" >
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">
        {name}
      </h4>
      <p className="job">
        {job}
      </p>
      <p className="info">
        {text}
      </p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft/>
        </button>
        <button onClick={nextPerosn} className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
  </article>;
};

export default Review;
