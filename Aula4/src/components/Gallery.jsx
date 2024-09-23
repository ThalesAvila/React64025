import { sculptureList } from './data.js';
import { useState } from 'react';

const Button = ({ children, changeSculpture, isActive }) => {
  return (
    <button
      style={
        isActive
          ? {
              backgroundColor: 'green',
              color: '#FFF',
            }
          : {}
      }
      onClick={changeSculpture}
    >
      {children}
    </button>
  );
};

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNext() {
    setIndex(index === sculptureList.length - 1 ? 0 : index + 1);
  }

  function handlePrevious() {
    setIndex(index === 0 ? sculptureList.length - 1 : index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function changeSculpture(indice) {
    setIndex(indice);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button disabled={index === 0} onClick={handlePrevious}>
        Previous
      </button>
      <button
        disabled={index === sculptureList.length - 1}
        onClick={handleNext}
      >
        Next
      </button>
      <div>
        {sculptureList.map((_, i) => {
          return (
            <Button
              isActive={index === i}
              changeSculpture={() => changeSculpture(i)}
            >
              {i + 1}
            </Button>
          );
        })}
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}
