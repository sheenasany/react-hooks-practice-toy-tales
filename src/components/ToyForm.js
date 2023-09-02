import React, { useState } from "react";

function ToyForm({ addNewToy }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [likes, setLikes] = useState(0)

  const handleForm = (e) => {
    e.preventDefault()

    let newToys = {
      name,
      image,
      likes
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToys)
    })
        .then(res => res.json())
        .then(data => addNewToy(data))

      setName("")
      setImage("")
      setLikes(0)
  }

  return (
    <div className="container">
      <form onSubmit={handleForm} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
