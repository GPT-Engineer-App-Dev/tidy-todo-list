import React, { useState } from "react";
import { Box, Flex, Input, Button, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Flex mb={4}>
        <Input placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} mr={2} />
        <IconButton aria-label="Add task" icon={<FaPlus />} onClick={handleAddTask} />
      </Flex>
      {tasks.map((task, index) => (
        <Flex key={index} mb={2} alignItems="center">
          <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(index)} mr={2} />
          <Text textDecoration={task.completed ? "line-through" : "none"} flex="1">
            {task.text}
          </Text>
        </Flex>
      ))}
      {tasks.some((task) => task.completed) && (
        <Button colorScheme="red" leftIcon={<FaTrash />} onClick={handleRemoveCompletedTasks}>
          Remove Completed Tasks
        </Button>
      )}
    </Box>
  );
};

export default Index;
