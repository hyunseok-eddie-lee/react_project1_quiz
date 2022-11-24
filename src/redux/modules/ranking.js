// 랭킹 정보를 넣어줄거야
// 랭킹 정보에 하나를 더 추가해줄거야! (추가되는 정보는 퀴즈 푼 유저 정보야{점수, 이름, 메세지})

import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const LOAD_RANK = "ranking/LOAD_RANK";
const ADD_RANK = "ranking/ADD_RANK";
const SET_LOADED = "ranking/SET_LOADED";

export const loadRank = (ranking_list)=>{
    return {type: LOAD_RANK, ranking_list};
};

export const addRank = (user_ranking) => {
    return {type:ADD_RANK, user_ranking};
};

export const setLoaded = (is_loaded) => {
    return {type:SET_LOADED, is_loaded};
};

const initialState = {
    is_loaded: true,
    ranking: [],
};

export const loadRankFB = () => {
    return async function (dispatch) {
        dispatch(setLoaded(false));
        // 랭킹 정보 가져온다 파이어 스토어에서!
        const ranking_data = await getDocs(collection(db, "ranking"));

        console.log(ranking_data);
        let ranking_list = [];

        ranking_data.forEach((r)=> {
            ranking_list.push({...r.data()});
        });

        // 넣어준다 리덕스 데이터에!
        dispatch(loadRank(ranking_list));
    }
}

export const addRankFB = (user_ranking)=> {
    return async function (dispatch){
        const docRef = await addDoc(collection(db, "ranking"), user_ranking);
        // dispatch(addRank(user_ranking));
    };
};

export default function reducer(state=initialState, action={}){
    switch (action.type) {
        case "ranking/LOAD_RANK": {
            return {...state, ranking: action.ranking_list, is_loaded: true};
        }

        case "ranking/ADD_RANK":
            const new_ranking_list = [...state.ranking, action.user_ranking];
            return {...state, ranking : new_ranking_list};

        case "ranking/SET_LOADED": {
            return {...state, is_loaded: action.is_loaded};
        }
        default:
            return state;
    }
};