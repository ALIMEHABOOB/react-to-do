
// ----------------------------------------------
// import React, { useState } from "react";

// const StickyNote = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoText, setTodoText] = useState("");

//   const handleAddTodo = () => {
//     if (todoText) {
//       setTodos([...todos, todoText]);
//       setTodoText("");
//     }
//   };

//   const handleEditTodo = (index, newText) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index] = newText;
//     setTodos(updatedTodos);
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Sticky Note</h1>
//       <div>
//         <input
//           type="text"
//           value={todoText}
//           onChange={(e) => setTodoText(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo, index) => (
//             <tr key={index}>
//               <td>{todo}</td>
//               <td>
//                 <button
//                   onClick={() =>
//                     handleEditTodo(index, prompt("Enter new text:"))
//                   }
//                 >
//                   Edit
//                 </button>
//                 <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//                 {/* <button style={{backgroundColor: 'red'}} onClick={() => console.log('Change color clicked!')}>Change Color</button> */}
//                 <select name="" id="">
//                   <option value="red">red</option>
//                   <option value="yellow">yellow</option>
//                   <option value="green">green</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StickyNote;

// -----------3=--------------------
import React, { useState } from "react";

const StickyNote = () => {
  const [todo, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText) {
      setTodos([...todo, { text: todoText, color: "" }]);
      setTodoText("");
    }
  };

  const handleEditTodo = (index, newText) => {
    console.log(index);
    const updatedTodos = [...todo];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleColorChange = (index, e) => {
    const updatedTodos = [...todo];
    updatedTodos[index].color = e.target.value;
    setTodos(updatedTodos);
  };

  return (
    <div>
      
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo} id="ADD_BUTTON">Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: todo.color }}>{todo.text}</td>
              <td>
                <button
                  onClick={() =>
                    handleEditTodo(index, prompt("Enter new text:"))
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                <select
                  value={todo.color}
                  onChange={(e) => handleColorChange(index, e)}
                >
                  <option value="">Select Color</option>
                  <option value="red">red</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="purple">purple</option>
                  <option value="orange">orange</option>
                  <option value="white">white</option>



                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyNote;
