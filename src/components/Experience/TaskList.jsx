// TaskList.jsx
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul className="tal">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};


const TaskList2 = ({ tasks }) => {
  return (
    <ul className="tal">
      {tasks.map((task, index) => (
        // Check if 'task' is an object with 'course' and 'responsibilities'
        task.responsibilities ? (
          <React.Fragment key={index}>
            {/* Render the course name as a non-bulleted heading */}
            <h4 className="course-name">{task.course}</h4>
            <ul>
              {task.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          // If it's a plain task (string), render it directly as a list item
          <li key={index}>{task}</li>
        )
      ))}
    </ul>
  );
};


 

export default TaskList2;
