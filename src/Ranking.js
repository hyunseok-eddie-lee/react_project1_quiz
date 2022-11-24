import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loadRankFB } from  "./redux/modules/ranking";

const Ranking = (props) => {
        const history = useHistory();
        const dispatch = useDispatch();

        const user_rank = React.useRef(null);

        React.useEffect(()=> {
            dispatch(loadRankFB());
            
            if(!user_rank.current){
                return;
            } 

            window.scrollTo({top: user_rank.current.offsetTop, left: 0, behavior:"smooth"});
        }, []);

        const _user_data = useSelector(state => state.ranking.ranking);

        const user_data = _user_data.sort((a, b)=>{
            return b.score - a.score;
        });    
    return (
        <RankContainer>
            <Topbar 
                // style={{
                //     position: "fixed", 
                //     top: 0, 
                //     left: 0, 
                //     borderBottom: "1px solid #888", 
                //     width: "100vw", 
                //     padding: "16px",
                //     background: "#fff",
                //     }}
            >
                <p>
                    RANK (Total <span>{user_data.length}</span>)
                </p>
            </Topbar>
            <RankWrap 
                // style={{margin: "10vh 0vh"}}
            >
                {user_data.map((u, idx) => {
                    if (u.current) {
                        return (
                            <RankItem 
                            // style= {{
                            //     display: "flex", 
                            //     border: "1px solid #888", 
                            //     padding: "16px", 
                            //     borderRadius: "16px"
                            // }} 
                            key={idx} highlight={true} ref={user_rank}>
                                <RankNum>{idx+1}</RankNum>
                                <RankUser>
                                    <p>
                                        <b>{u.user_name}  </b>
                                        (score: {u.score})
                                    </p>
                                    <p>{u.message}</p>
                                </RankUser>
                            </RankItem>
                        );
                    }
                    

                        return (
                            <RankItem key={idx}>
                                <RankNum>{idx+1}</RankNum>
                                <RankUser>
                                    <p>
                                        <b>{u.user_name}  </b>
                                        (score: {u.score})
                                    </p>
                                    <p>{u.message}</p>
                                </RankUser>
                            </RankItem>
                        );
                    })}
            </RankWrap>
            {/* <div style={{position: "fixed", bottom: "30px", left: 0, width: "100vw"}}> */}
                <Button onClick={()=>{
                    history.push("/");
                }}>Try again</Button>
            {/* </div> */}
        </RankContainer>
    )
}

    const RankContainer = styled.div`
        width: 100%;
        padding-bottom: 100px;
    `;

    const Topbar = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw; 
        min-height: 50px; 
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        & > p {
            text-align: center;
            font-weight: 700;
            font-size: 1.2em;
        }

        & > p > span {
            border-radius: 30px; 
            background-color: #fef5d4;
            font-weight: 600;
            padding: 4px 8px;
        }
    `;

    const RankWrap = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 75px;
    `;

    const RankItem = styled.div`
        // width: 80vw;
        width: 60vw;
        margin: 8px auto;
        // margin: 8px 10vw;
        max-width: 340px;

        display: flex;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding: 8px 16px;
        align-items: center;
        background-color: ${(props)=> (props.highlight ? "#ffd6aa" : "#ffffff")};
    `;

    const RankNum = styled.div`
        text-align: center;
        font-size:2em;
        font-weight:600;
        padding: 0px 16px 0px 0px;
        border-right: 1px solid #ddd;
    `;

    const RankUser = styled.div`
        padding: 8px 16px;
        text-align: left;
        & > p {
            &:first-child > b {
                border-bottom: 2px solid #212121;
            }
            margin: 0px 0px 8px 0px;
        }
    `;

    const Button = styled.button`
        position: fixed;
        bottom: 5vh;
        // left: 0;
        // left: 20vw;
        left: 42vw;

        padding: 8px 24px;
        &:hover{background-color: ${(props)=> (props.outlined ? "#ffffff" : "#dadafc")}};
        cursor: pointer;
        border-radius: 30px;
        // margin: 0px 10vw;
        border: 1px solid #dadafc;
        // width: 80vw;

        max-width: 340px;
    `;

export default Ranking;
