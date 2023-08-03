import React from "react";
import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("");
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>
      <label> Exercise Title: </label>
      <input
        type="text"
        onchange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label> Load: </label>
      <input
        type="number"
        onchange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label> Reps: </label>
      <input
        type="number"
        onchange={(e) => setReps(e.target.value)}
        value={reps}
      />
    </form>
  );
}
