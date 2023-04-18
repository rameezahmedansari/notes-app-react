import { useState } from "react";

const Create = ({ list, setList }) => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setDesc(e.target.value);
  };
  const btnHandler = () => {
    if (desc !== "" && title !== "") {
      setList([
        ...list,
        {
          id: Math.floor(Math.random() * 1000) + 1,
          title: title,
          description: desc,
        },
      ]);

      setDesc("");
      setTitle("");
    } else {
      alert("Please enter title and description both and try again!");
    }
  };
  return (
    <div className="create">
      <h1>Create</h1>
      <p>Title:</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>Description:</p>
      <textarea value={desc} onChange={handleInput} />
      <button onClick={btnHandler}>Add</button>
    </div>
  );
};

export default Create;
