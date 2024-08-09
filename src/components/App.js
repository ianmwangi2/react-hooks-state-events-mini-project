import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter categories={CATEGORIES} onSelectCategory={setSelectedCategory} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
