import React from "react";

export default function WorkoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): {workout.load}</strong>
      </p>
      <p>
        <strong>Reps: {workout.reps}</strong>
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
}
