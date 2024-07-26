import instance from "../../AxiosInstance/axiosinstance";

let allServiceDetails=[];

await instance.get("ServiceDetails/AllServiceDetails").then((res)=>{
    allServiceDetails=[...res.data]
})

function serviceDetailsReducer(state=allServiceDetails,action,data){
    if(action.type==="AddData"){
        return [...data]
    }else{
        return [...state]
    }  
}

export default serviceDetailsReducer