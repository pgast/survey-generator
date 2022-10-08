import styled from 'styled-components';

export const ListContainer = styled.div`
  border-left: 2px solid black;
  width: 50%;
  display: flex;
  font-size: 17px;
`

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 560px;
  margin-left: 44px;
`

export const ListItem = styled.div`
  border: 2px solid black;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  background: ${({ isDragging }) => isDragging ? 'black' : 'white' };
  color: ${({ isDragging }) => isDragging ? 'white' : 'black' };

  /* Delete button */
  & > div:last-child:hover {
    color: white;
    background-color: red;
  }
`

export const ListItemTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  /* The container of the question  */
  div:first-child {
    font-weight: bold;
    font-size: 15px;
    width: 270px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
  }
`

export const IconContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ListItemContent = styled.div`
  display: flex;
  width: 100%;

  /* Draggable icon button */
  & > div:first-child:hover {
    color: white;
    background-color: gray;
  }
`

export const AnswerTypeText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 8px;
  width: 100px;

  span:first-child {
    font-weight: bold;
    margin-top: 2px;
  }

  span {
    text-transform: capitalize;
  }
`

export const RequiredText = styled(AnswerTypeText)`
  width: 70px;
  margin-left: 12px;
  display: ${({ isRequired }) => isRequired === 'yes' ? 'block' : 'none'};
`

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  color: #d3d3d3;
`
