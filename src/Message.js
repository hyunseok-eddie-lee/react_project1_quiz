import React from "react";
import rtan from "./scc_img01.PNG";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

import { setMessage } from "./redux/modules/user";
import { addRank, addRankFB } from "./redux/modules/ranking";

const Message = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const message_ref = React.useRef(null);

    const user_name = useSelector((state)=> state.user.user_name);
    const quiz_name = useSelector(state => state.quiz.quiz_name);
    
    const quiz_list = useSelector(state => state.quiz.quiz_list);
        const user_answer_list = useSelector(state => state.quiz.user_answer_list);

        const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    const score = Math.round(_score);

    return (
        <div
            style={{
                // display: "flex",
                // // height: "100vh",
                // // width: "100vw",
                // overflow: "hidden",
                // // padding: "16px",
                // boxSizing: "border-box",
            }}
        >
            <div
                className="outter"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                    // padding: "0px 10vw",
                    boxSizing: "border-box",
                    maxWidth: "400px",
                    margin: "0px auto"
                }}
            >
                <img src={rtan} 
                    style= {{width: "80%", margin: "-70px 16px 48px 16px"}} 
                />
                <h1
                    style={{
                        fontSize: "1.5em", margin: "0px", lineHeight: "1.4"
                    }}
                >
                    Write a comment for 
                    <span
                        style={{
                            backgroundColor: "#fef5d4", 
                            padding: "5px 10px",
                            borderRadius: "30px",
                        }}
                    >{quiz_name}</span>
                    </h1>

                <input ref={message_ref}
                    type="text"
                    style={{
                        padding: "10px",
                        margin: "24px 0px",
                        border: "1px solid #dadafc",
                        borderRadius: "30px",
                        width: "94%",
                        // textAlign: "center",
                    }}
                    placeholder="   Comment"
                />
                <button onClick={async()=> {
                    dispatch(setMessage(message_ref.current.value));
                    dispatch(addRankFB({
                        score: score, 
                        user_name: user_name, 
                        message: message_ref.current.value,
                    }));
                    // dispatch(
                    //     addRank({
                    //         score: score, 
                    //         user_name: user_name, 
                    //         message: message_ref.current.value,
                    //     })
                    // );
                    // window.setTimeout(()=>{
                    //     props.history.push("/ranking");
                    // }, 1000);
                    history.push("/ranking");
                
                }}
                    style={{
                        padding: "8px 24px",
                        backgroundColor: "#dadafc",
                        borderRadius: "30px",
                        border: "#dadafc",
                        cursor: "pointer",
                    }}
                >Leave a comment and go to the ranking page</button>
            </div>
        </div>
    );
};

export default Message;