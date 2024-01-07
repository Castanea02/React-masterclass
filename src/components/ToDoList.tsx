import { useState } from "react";
import { useForm } from "react-hook-form";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { useRecoilSnapshot, useRecoilValue, useRecoilState } from "recoil";
import { categoryState, toDoState, toDoSelector, Categories } from "../atoms";

function ToDoList() {
  //register = get all input value
  //handleSubmit = Submit Event
  //watch = onChange Event
  //formState = error
  //setError = Trigger Error set Message => should focus = auto input focus
  //setValue =
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>ToDo</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        <option value={Categories.DELETE}>Delete</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
