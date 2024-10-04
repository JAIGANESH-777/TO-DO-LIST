document.getElementById("addTaskButton").addEventListener("click", function () {
  const input = document.getElementById("taskInput"); // Get the input field
  const taskText = input.value.trim(); // Get the text entered by the user and trim white spaces
  if (taskText === "") return; // If no text is entered, do nothing

  const li = document.createElement("li"); // Create a new list item <li>
  li.innerHTML = `${taskText} <button class="delete">Delete</button>`; // Set the list item to contain the task and a delete button

  li.querySelector(".delete").addEventListener("click", function () {
    // Add event listener to delete the task when clicked
    li.remove(); // Remove the task (li element) when the delete button is clicked
  });

  document.getElementById("taskList").appendChild(li); // Add the new list item to the <ul> (task list)
  input.value = ""; // Clear the input field for the next task
});
