import React from "react";
import img from "./scc_img01.PNG"

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/modules/user";

const Start = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const name_ref = React.useRef(null);
    const quiz_name = useSelector(state => state.quiz.quiz_name);

    return (
        <div
            style= {{
                // display: "flex",
                // height: "100wh",
                // width: "100vw",
                // overflow: "hidden",
                // padding: "16px",
                // boxSizing: "border-box",
            }}
        >
            <div
                // className="outter"
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
                margin: "0px auto",
            }}>
                <img 
                    src={img} 
                    style={{
                        width: "80%",
                        margin: "-70px 16px 48px 16px",
                        // minWidth: "300px",
                    }}
                />
                <h1 style={{fontSize: "1.5em", margin: "0px", lineHeight: "1.4"}}>
                    How much do you know about <span style={{
                        backgroundColor: "#fef5d4",
                        padding: "5px 10px",
                        borderRadius: "30px",
                    }}>{quiz_name}</span>?
                </h1>
                <input ref={name_ref}
                    type="text"
                    style={{
                        padding: "10px",
                        margin: "24px 0px",
                        border: "1px solid #dadafc",
                        borderRadius: "30px",
                        width: "94%",
                        textAlign: "center",
                    }}
                    placeholder="Write your name"
                />
                <button 
                onClick={() => {
                    dispatch(setName(name_ref.current.value));
                    history.push("/quiz");
                }}
                    style={{
                    padding: "8px 24px",
                    backgroundColor: "#dadafc",
                    border: "#dadafc", 
                    borderRadius: "30px",
                    margin: "36px 0px",
                    cursor: "pointer",


                }}>Start Quiz</button>
            </div>
        </div>
    );
}

export default Start;