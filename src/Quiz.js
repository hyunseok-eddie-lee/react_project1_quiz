import React from "react";
import img from "./scc_img01.PNG"
import styled from "styled-components";

import { useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer} from "./redux/modules/quiz";

import Progress from "./Progress";

const Quiz = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);

    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer));
    }

    React.useEffect(()=> {
        if (user_answer_list.length === quiz_list.length) {

            // const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;

            // const score = Math.round(_score);
            // console.log(_score, score);

            history.push("/score");
            return;
        }
    }, [user_answer_list]);

    if(user_answer_list.length === quiz_list.length) {
        return null;
    }

    return (
            <QuizContainer>
                <Progress/> 
                <div>
                    <p>
                        <span>Quiz No. {user_answer_list.length + 1}</span>
                    </p>
                    <Question>{quiz_list[user_answer_list.length].question}</Question>
                    <img src={img}
                            style={{
                                width: "80%",
                                margin: "10px 16px 20px 16px",
                                // minWidth: "300px",
                            }}
                    />

                    <div>
                        <button 
                        onClick={() =>{
                            setAnswer(true);
                        }}
                        style={{
                            width: "50px", height: "50px", margin: "16px"
                        }}>O</button>

                        <button 
                        onClick={() =>{
                            setAnswer(false);
                        }}
                        style={{
                            width: "50px", height: "50px", margin: "16px"
                        }}>X</button>

                    </div>
                </div>
            </QuizContainer>
    )
}

const QuizContainer = styled.div`
    

    margin-top: 16px;
    width: 100%
    & > p > span {
        padding: 8px 16px;
        background-color: #fef5d4;
        // border-bottom: 3px solid #ffd6aa;
        border-radius: 30px;
    }
`;

const Question = styled.h1`
    font-size: 1.5em;
`;

// const AnswerZone = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     min-height: 70vh;
// `;

// const Answer = styled.div`
//     width: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 100px;
//     font-weight: 600;
//     color: #dadafc77;
// `;

export default Quiz;