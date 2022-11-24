import React from "react";
import styled from "styled-components";

import { useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

const Score = (props) => {
        const history = useHistory();
        
        const quiz_list = useSelector(state => state.quiz.quiz_list);
        const user_answer_list = useSelector(state => state.quiz.user_answer_list);

        const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    const score = Math.round(_score);
    return (
            <ScoreContainer>
                <Text>
                    What's my quiz score 
                    <br/> for <span> {props.name}</span>?
                </Text>
                <MyScore>
                    <span>{score}</span> / 100

                </MyScore>

                {/* <p>우와! 우린 참 친해요!</p> */}
                {/* <p>{score_text}</p> */}

                <Button onClick={()=> {
                    history.push("/message");
                }} outlined >Write a comment for {props.name}</Button>
            </ScoreContainer>
    )
}

const ScoreContainer = styled.div`
    display: flex;
    // width: 100vw;
    // height: 100vh;
    overflow: hidden;
    // padding: 16px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
`;

const Text = styled.h1`
    font-size: 1.5em;
    margin: 0px;
    line-height: 1.4;
    & span {
        background-color: #fef5d4l
        padding: 5px 10px;
        border-radius: 30px;
    }
`;

const MyScore = styled.div`
    & span {
        border-radius: 30px;
        padding: 5px 10px;
        background-color: #fef5d4;
    }
    font-weight: 600;
    font-size: 2em;
    margin: 24px;

    & > p {
        margin: 24px 0px;
        font-size: 16px;
        font-weight: 400;
    }
`;

const Button = styled.button`
    padding: 8px 24px;
    background-color: ${(props)=>(props.outlined ? "#ffffff" : "#dadafc")};
    &:hover{background-color: #dadafc;};
    border-radius: 30px;
    margin: 8px;
    border: 1px solid #dadafc;
    // width: 80vw;
    width: 94%;
    cursor: pointer;
`;

export default Score;