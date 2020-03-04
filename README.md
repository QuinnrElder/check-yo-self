# Check Yó Self

## Introduction
- Check Yó Self is an app where a user can come and go as they please. The user will create individual tasks. That will eventually be added to a ToDo-Card. Once the user has created a ToDo-Card all the tasks that was originally created on the left side of the page, will percist onto the right side of the page. On reload the page will repopulate the previoulsy created ToDo-Cards as well as allow the user to create more ToDo-Cards and tasks. 

## My proccess & The Project
- This project was an extreme level of implimentation! This project pushed all my skills to the limit, not to mention a few of my buttons. This was the first solo project that I took on where I wasn't sure how I would be able to accomplish this tasks let alone approach it step by step. The focus of this project for me was not only get as far as I could in the code base. But to also allow as little tech debtas possible, lots of suedo-coding, "rubber-ducking" and not to mention understanding my code base. I wasnt able to get where I had orriginally planned out! Making sure that I was following my guidelines and the App-Comp rubric! I ran into tech debt early on. Taking a step back and being able to refactor the code base to get rid of the tech debt I was createing was a huge win for myself and my level of understanding! My biggest take aways from this project was how to manipulate complex data-types within arrays, localStorage(JSON.stringify(), LS.set, JSON.parse(), LS.get), getting object intances to manipulate date and methods in seperate files.

## ScreenShot
![]assets/readMeScreenShot.jpg

# Project Specs and App-Comp
## Specification
Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a checklist application called Check Yo'Self!

## Learning Goals
### Solidify and demonstrate your understanding of:
- DRY JavaScript
- localStorage to persist data
- Iterate through/filter DOM elements using for loops
- Understand the difference between the data model and how the data is displayed on the DOM
- Solo Project Expectations
- This project is an important step in demonstrating you are ready to start Module 2. To ensure we  can accurately assess that, it’s important you meet the expectations:

- You are the only one who should type code - no copy and pasting code
- For any code that you didn’t write entirely by yourself (mentor or rock supported)- you should be able delete it and re-write it yourself
- You shouldn’t be looking at any other Check Yo Self codebase at any time for any reason. If you have an opportunity and are tempted, do the right thing for YOUR learning and don’t do it!
- Any peer-to-peer collaboration should be discussions about ideas, not coding together.
## Set Up & Submission
- Create a private repository and add your assigned instructor as a collaborator. You cannot deploy private repositories to GitHub Pages, that’s ok.
- Create a project board
### By EOD on Kick Off Day: DM your assigned instructor with two links: Project Board & Repo

## Architecture
Your entire application will consist of one HTML page or template. You will have three JavaScript files:

### A todo-list.js file that contains a ToDoList class.
- ToDoList methods must include, but are not limited to:
      - constructor
      - saveToStorage
      -  deleteFromStorage
      -  updateToDo (should update the todo’s title and urgency)
      - updateTask (should update a task’s content and if it has been completed)
- A task.js file that contains a Task class. We aren’t giving you any requirements about what methods or properties should be on it.
- A main.js file that contains all DOM related JavaScript
### Data Model
- A to-do list has an id, title, tasks, and urgent property.
- The id property should be a unique identifier
      - title is a string
      - urgent is a boolean value
      - tasks should be an array of objects
- Each task in the array should be an object (you’ll need a way to identify these objects, track whether the task has been completed, and store the task’s text…)
- See above for the required methods of the ToDoList class.
- Each todo list on the page should be created as an instance of the ToDoList class.

## Iteration 0: Beginning User Flow
### Viewing the List of To-Dos
### When visiting the application, the user should:

- See a list of all existing to-dos, including the title, list of tasks to be checked off, and state of urgency.
- To-dos should appear in descending chronological order (with the most recently created todo at the top left).
- If there are no to-dos yet, then there should be an indication to the user to create a todo list, displayed in the empty section.
- Adding a New Checklist

### On the left side of the page, a user should see:

- Two inputs for entering the title and adding a new task to the list.
- Two buttons including a Make Task List button for committing the checklist and a Clear All button to clear the title and checklist.
- Lastly, there should be a Filter by Urgency button.

### When a user adds a new Task Item:

- The task is added to the bottom of the checklist in between the Task Title and Task Item inputs
- Each task on the checklist should also be able to be removed by clicking the respective “delete” button.
- It should not add a task to the checklist if the input is empty.
- Tasks on the checklist of the form do not need to persist.

### When a user clicks Make Task List:

- A new card with the provided title and tasks should appear in the todo list.
- The text fields and checklist in the form should be cleared and ready to accept a new todo.
- The Make Task List button should be disabled if either the title input or checklist is empty.
- The page should not reload.
- The todo card should be persisted. It should still be present upon reloading the page.
- The todo should be added to localStorage using the saveToStorage method defined in the ToDoList class.

### When a user clicks Clear All:

- Both the title input and list of tasks should be cleared.
- The Clear All button should be disabled if both the title input and checklist are empty.

## Iteration 1: Completing The MVP (Minimum Viable Product)
### Checking Off A Task
- After a user has completed a task on their checklist, they should be able to check it off.

- There should be a visual cue so that the user knows what they have completed and what is still left to do.
- Tasks that are checked off should persist upon reloading the page.
- The update of the data model should occur in the updateTask method that is defined in the ToDoList class.
- How the DOM gets updated using JavaScript should happen in the main.js file.
- Deleting an Existing ToDo Card
- After creating a todo card, the user should be able to remove it once they have completed their checklist.

- Each todo card on the todo list should have a button to remove it from both the data model and the DOM.
- The “Delete” button should only be enabled if all of the tasks on the checklist have been checked off.
- Upon clicking the “Delete” button, the appropriate todo list should be removed from the DOM.
- The update of the data model should happen in the deleteFromStorage method that is defined in the ToDoList class.
- How the DOM gets updated using JavaScript should happen in the main.js file
- Marking a ToDo Card Urgent
- A user should be able to mark their todo cards urgent so that they know which they need to complete first.

- When the user clicks on the Urgent button, the button should stay in the active state.
- Todo cards that are marked as urgent should persist upon reloading the page.
- This update of the data model should occur in the updateToDo method that is defined in the ToDoList class.
- How the DOM gets updated using JavaScript should happen in the main.js file

## Iteration 2: Specifying what Content is Viewed
- Filtering and Searching by Text
- We’d like our users to be able to easily find their to-dos, so let’s provide them a search bar to filter through their list.

- At the top of the application, include a text field labeled Search.
- As a user types in the search box, the list of to-dos on the DOM should filter in real time to only display todo cards whose title include the user’s text. The page should not reload.
- Clearing the search box should restore all todo cards on the list.
- There is no need to make persisting changes to the data model to achieve this functionality.
- Viewing Urgent ToDo Cards
- Let’s also allow our user be able to view their urgent todo cards only.

- The user should only see the urgent todo cards when they click on the Filter by Urgency button. (consequently, the button should be highlighted)
- Clicking on the Filter by Urgency button again, the button should no longer be highlighted, and all of the user’s to-dos should be displayed.
- When viewing urgent to-dos, the search field should only search through the urgent to-dos.
- If there are no urgent to-dos yet, then there should be an indication displayed in the empty todo section notifying the user to mark some to-dos urgent.
- These changes do not need to persist in between sessions.
 
## Iteration 3 (Extensions): Improving on the Experience
### Editing Our Tasks
- A user would likely want to edit the title of a todo or update their task later on.

- When a user clicks the title or any of the tasks on the checklist of a todo card, that text should become an editable text field, pre-populated with the existing todo title or task.
- The user should be able to “commit” their changes by pressing “Enter/Return” and by clicking outside of the text field.
- This change should be saved in localStorage using the updateTodo method for the title and updateTask method for the task defined in the ToDoList class.
- Improving The Search Functionality
- Our user might want to be able to search their cards not only by their title, but by their tasks as well.

- The user should have a drop down next to the search bar to select if they want to filter their list by Title, Tasks, or All.
- Searching by the Title will be the original functionality where it filters the todo cards by their title based on the user’s text.
- Searching by the Tasks will filter the todo cards by their tasks based on the user’s text.
- Searching by the All will filter the todo cards by both their title and tasks based on the user’s text.
- Adding More Tasks To Each Card
- The user might also might to add more tasks to their checklist after they have created a todo card.

- Add an input to the bottom of each card so that the user can add more tasks later.
- Each task added should appear at the bottom of the list unchecked.
- The user should not be able to add blank tasks if the input is empty.
- What is a Masonry Layout?
- This type of layout is known as a Masonry layout. This layout refers to when items of uneven size are laid out in a way where there are no uneven gaps. Due to this scenario, this is NOT good scenario for using grid. This is because we can’t define where each card is going to be in the layout. There are a number of ways to solve this solution. Here are a couple of links to check out to achieve this goal:

CSS Tricks Examples
Code Pen Example
Submission Details
Place submissions in the appropriate tab of the Submission Sheet
Layout Comps
Here are the links to the icon SVG files.

## Rubric
### Rubric score key:

4: Over-achievement - student did self-teaching and accomplished beyond scope of project, without sacrificing code quality in the pursuit of extensions; all code demonstrates strong mastery of DRY principles and SRP conventions

3: Right on track - student is exactly where we want them to be, has a strong foundation, and demonstrates competency and comfort with the subject

2: A little behind - student needs to focus study in this area to catch up to where they should be in terms of proficiency

1: Very behind - student needs intervention to get back on track

### Functional Expectations
4: Application meets all of the expectations from Iteration 3.

3: Application meets all of the expectations of Iteration 2.

2: Application meets all of the expectations of Iteration 1 and one of the 2 parts of Iteration 2.

1: Application meets all of the expectations of Iteration 0.

### Professionalism
4: 
- A PR template was used. A code review was requested and completed by a mentor, and all team members can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback). 
- AND: Developer is ready to clearly present the evolution of this app during the eval - from architecture decisions made in the planning process, to wins and challenges throughout.

3: 
- Developer is able to clearly answer questions regarding the evolution of this app during the eval from architecture decisions made in the planning process, to wins and challenges throughout. AND: A project board is used and kept update throughout the project. Branches are used. Most commits are formatted correctly. The README is formatted well and contains:
- Overview of project and goals
- Overview of technologies used, challenges, and wins, any other reflections
- Screenshots of comp and your app

2: 
- Developer is able to answer questions regarding the evolution of the app, but may need some prompts to clearly articulate or provide enough context. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail.

1: 
- Developer struggles to answer questions regarding the evolution of the app. OR: Commit and PR history does not tell a story of the application OR a README has not been created/has minimal information.

### JavaScript - Style and Implementation
4: 
- Code is well refactored and demonstrates developer empathy.
- No global variables are used aside from query selectors, start time, and instances of Player and - Deck. If you feel you need more because you are building out additional functionality that requires a global variable, please check in with an instructor.
All functions are less than 10 lines long or otherwise demonstrate SRP.

3: 
- The separation of data model logic and presentational logic is clear and can be explained by developer.
- The application correctly implements a data model for the Card and Deck classes, including all required methods.
- Developer can speak to the role of each class.
- All DOM manipulation is handled exclusively in main.js.
- Developer demonstrates understanding and ability to refactor code by having at least 1 example of - DRY code that was intentionally reused.
- SRP is evidenced by clear, concise function names; each function only does what the name describes.

2: 
- Arguments and parameters are used to limit global variables.
- The event object is used correctly, and is not accepted as a parameter if it is not necessary.
- Developer can speak to how the event object is utilized for any given event handler.
- Function and variable names describe their role in the program. Examples: The name of the data type should not ever be in a variable name (ex: “petArray”); the name itself should be clear enough to indicate the type of data it holds (ex: “allPets”).
- An event handler should not have “handler” in the name (ex: “clickHandler”); the name should indicate the handler’s purpose (ex: “addNewPet”).

1: 
- Style and syntax meets the criteria of the Turing JS Style Guide.
- Function declarations are used over anonymous 
