import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Edit = ({ list, setList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let obj = list.find((item) => item.id === +id);
  let index = list.findIndex((item) => item.id === +id);
  console.log(index);
  const [desc, setDesc] = useState(obj.description);
  const [title, setTitle] = useState(obj.title);
  const btnHandler = () => {
    const editedList = [...list];
    editedList[index].title = title;
    editedList[index].description = desc;

    setList(editedList);

    setDesc("");
    setTitle("");
    navigate("/home");
  };
  return (
    <div className="create">
      <h1>Edit</h1>
      Title: <input value={title} onChange={(e) => setTitle(e.target.value)} />
      Description:
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={btnHandler}>Update</button>
    </div>
  );
};

export default Edit;
