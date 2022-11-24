import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
    const quiz_list = useSelector(state=> state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);

    return (
        <div>
            <ProgressBar>
            <HighLight width={(user_answer_list.length/quiz_list.length) *100 + "%"} />
            <Dot/>
            </ProgressBar>
        </div>
    )
}

const ProgressBar = styled.div`
  width: 80%;
  // width: 100%;
  margin: 40px auto 20px auto;
  background: #efe8e8;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #aacfe7;
  height: 20px;
  width: ${(props) => props.width};
  transition: 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  // border: 5px solid #b10000;
  border: 5px solid #aacfe7;
  border-radius: 20px;
  margin: 0px 0px 0px -10px;
  box-sizing: border-box;
`;


export default Progress;