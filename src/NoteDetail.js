import { useParams, useNavigate } from "react-router-dom";

const NoteDetail = ({ list, setList }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  let obj = list.find((item) => item.id === +id);

  const editHandler = () => {
    navigate(`/edit/item/${id}`);
  };

  const deleteHandler = () => {
    const filteredList = list.filter((item) => item.id !== +id);
    setList(filteredList);
    navigate("/home");
  };
  return (
    <div className="note-detail">
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
      <div>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default NoteDetail;
