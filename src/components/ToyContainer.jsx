import React from "react";
import ToyCard from "./ToyCard";

// The = [] here is the "Safety Net" that fixes your test error
function ToyContainer({ toys = [], onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {/* If toys exists, map it; otherwise, this won't crash */}
      {toys.map((toy) => (
        <ToyCard 
          key={toy.id} 
          toy={toy} 
          onDeleteToy={onDeleteToy} 
          onUpdateToy={onUpdateToy} 
        />
      ))}
    </div>
  );
}

export default ToyContainer;