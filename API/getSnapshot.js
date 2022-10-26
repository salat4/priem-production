import axios from "axios";


export default async function getSnapshot(){
    try{
        const result = await axios.get("http://localhost:8080/snapshot");
        return result.data
    }
    catch(error){
        console.log(error);
    }
}