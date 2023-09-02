import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeletedToy }) {

  const toyList = toys.map(toy => <ToyCard key={toy.id} toy={toy} handleDeletedToy={handleDeletedToy} />)

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
