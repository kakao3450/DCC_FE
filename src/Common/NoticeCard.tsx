import React from "react";
import styled from "styled-components";


interface Props {
  title : string;
}


const NoticeCard = (props : Props) => {

  return (
    <div>
        <BodyContents>
          <Title><p>웹</p></Title>
          <Image>{props.title}</Image>
          <Content> <span></span></Content>
        </BodyContents>
    </div>
  );
};
const BodyContents = styled.div`
  float: left;
  background-color: #D9D9D9;
  padding: 1rem;
  margin:30px;
  width: 17rem;
  height: 19rem;
  border-radius: 12px;
  box-shadow: 0px 1px 1px black;
`;
const Title = styled.div`
  background-color: #611F1F;
  border: solid 1px black;
  border-radius: 4px;
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center; 
  color: white;
`;
const Image = styled.div`
  /* border: solid 1px black; */
  height: 8rem;
`;
const Content = styled.div`
  /* border: solid 1px black; */
  height: 8rem;
  display: flex; 
  flex-direction: column;
  align-items: flex-start;  
  /* & > span {
    border: solid 1px black;
  } */
`;
export default NoticeCard;
