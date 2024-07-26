import instance from "../../AxiosInstance/axiosinstance";

let feedBacks=[];

await instance.get("FeedBack/GetUserFeedBack").then((res)=>{
    feedBacks=[...res.data]
})

function ratings(state=feedBacks,action){
    return [...state];
}

export default ratings;
