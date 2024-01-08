import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 50px;
  padding: 5px 10px;
  margin: 5px;
`;

interface IDragablleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragablleCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
