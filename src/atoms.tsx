import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["1", "2"],
    doing: ["3", "4"],
    done: ["5", "6"],
  },
});
