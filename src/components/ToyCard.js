import React, { useState } from "react";

function ToyCard({ toy, handleDeletedToy }) {

  const [likes, setLikes] = useState(toy.likes)


  const handleDeleteBtn = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      handleDeletedToy(toy.id)
    }

    let handleLikes = () => {
      fetch(`http://localhost:3001/toys/${toy.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({ likes : toy.likes += 1})
      })
        .then(res => res.json())
        .then(newLikes => setLikes(newLikes.likes))
    }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like 💖</button>
      <button onClick={() => handleDeleteBtn()} className="del-btn">Donate to GoodWill 😭</button>
    </div>
  );
}


export default ToyCard;
