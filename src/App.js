import React from 'react';
import { Header, Footer } from 'components/layouts';
import Exercises from 'components/Exercises';
import { muscles, exercisesList } from './store.js';

export default function App() {
  const [exercises] = React.useState(exercisesList);
  const [exercise, setExercise] = React.useState({});
  const [category, setCategory] = React.useState('');

  const getExercisesByMuscles = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  const handleCategorySelected = (category) => {
    setCategory(category);
  };

  const handleExerciseSelected = (id) => {
    setExercise(() => {
      return exercises.find((ex) => ex.id === id);
    });
  };

  const exercisesByMuscles = getExercisesByMuscles();

  return (
    <>
      <Header />

      <Exercises
        exercise={exercise}
        category={category}
        exercises={exercisesByMuscles}
        onSelect={handleExerciseSelected}
      />

      <Footer
        category={category}
        muscles={muscles}
        onSelect={handleCategorySelected}
      />
    </>
  );
}
