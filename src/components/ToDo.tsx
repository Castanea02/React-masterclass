import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const clickState = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };

      if (name === "DELETE") {
        return [
          ...oldToDos.slice(0, targetIndex),
          ...oldToDos.slice(targetIndex + 1),
        ];
      } else {
        return [
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ];
      }
    });
  };

  return (
    <li>
      {text}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={clickState}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={clickState}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={clickState}>
          Done
        </button>
      )}
      {category !== Categories.DELETE && (
        <button name={Categories.DELETE} onClick={clickState}>
          DELETE
        </button>
      )}
    </li>
  );
}

export default ToDo;
