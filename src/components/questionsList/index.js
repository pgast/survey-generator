import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

import {
  ListItem,
  EmptyList,
  ListContent,
  RequiredText,
  ListContainer,
  IconContainer,
  AnswerTypeText,
  ListItemContent,
  ListItemTextContainer,
} from './styled'

const List = ({ onDragEnd, questions, deleteQuestion }) => (
  <ListContainer>
    {!questions.length && (
      <EmptyList>
        No questions on this list.
      </EmptyList>
    )}
    {questions && (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ListContent
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {questions.map((question, index) => (
                <Draggable 
                  key={index} 
                  index={index}
                  draggableId={`${index}${question.text}`} 
                >
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                    >
                      <ListItemContent>
                        <IconContainer>
                          <FontAwesomeIcon icon={faBars} />
                        </IconContainer>
                        <ListItemTextContainer>
                          <div>
                            {question.text}
                          </div>
                          <AnswerTypeText>
                            <span>Type</span>
                            <span>{question.type}</span>
                          </AnswerTypeText>
                          <RequiredText isRequired={question.isRequired}>
                            <span>Required</span>
                          </RequiredText>
                        </ListItemTextContainer>
                      </ListItemContent>
                      <IconContainer onClick={() => deleteQuestion(index)}>
                        <FontAwesomeIcon icon={faSquareMinus} />
                      </IconContainer>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ListContent>
          )}
        </Droppable>
      </DragDropContext>
    )}
  </ListContainer>
);

export default List
