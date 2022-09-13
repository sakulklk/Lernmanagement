import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//npm install react-beautiful-dnd --save
import { useState } from 'react';
import * as React from 'react';

var example = [
  { id: 'abc', text: 'Das ist das Ende.' },
  { id: 'def', text: 'Das ist der Start' },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function DragDrop() {
  const [contentArr, setContentArr] = useState(example);
  console.log(contentArr);
  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) {
            return;
          }

          const items = reorder(
            contentArr,
            result.source.index,
            result.destination.index
          );
          console.log(contentArr);
          console.log(items);
          setContentArr(items);
        }}
      >
        <Droppable droppableId="d">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {contentArr.map((t, i) => (
                <Draggable draggableId={t.id} index={i}>
                  {(p) => (
                    <div
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      key={t.id}
                    >
                      {t.text}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
