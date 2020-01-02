import React from 'react';
import { Header, Footer } from 'components/layouts';
import Exercises from 'components/Exercises';
import { muscles, exercisesList } from './store.js';

export default function App() {
  const [exercises, setExercises] = React.useState(exercisesList);
  const [exercise, setExercise] = React.useState({});
  const [category, setCategory] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);

  const getExercisesByMuscles = () => {
    const initialExercises = muscles.reduce((exercises, category) => {
      return {
        ...exercises,
        [category]: []
      };
    }, {});

    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initialExercises)
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

  const exerciseCreate = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const onDelete = (id) => () => {
    setExercises(exercises.filter((item) => item.id !== id));
  };

  const onEdit = (id) => () => {
    setEditMode(true);
    setExercise(() => {
      return exercises.find((ex) => ex.id === id);
    });
    // setExercises(
    //   exercises.map((item) => {
    //     if (item.id !== id) {
    //     }

    //     return item;
    //   })
    // );
  };

  const exercisesByMuscles = getExercisesByMuscles();

  return (
    <>
      <Header exercises={exercisesByMuscles} exerciseCreate={exerciseCreate} />

      <Exercises
        exercise={exercise}
        category={category}
        exercises={exercisesByMuscles}
        onSelect={handleExerciseSelected}
        onDelete={onDelete}
        onEdit={onEdit}
        editMode={editMode}
      />

      <Footer
        category={category}
        muscles={muscles}
        onSelect={handleCategorySelected}
      />
    </>
  );
}
