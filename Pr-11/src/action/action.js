import { getDatabase, ref,set } from "firebase/database";
import { app } from "../firebaseConfig";

const db = getDatabase(app)

export const addData = (data) =>{
    console.log(data);
    return async(dispatch)=>{
        try{
            set(ref(db,"record/"+data.id),{
                name:data.name,
                email:data.email,
                phone:data.phone,
                conmpany:data.company,
                massage:data.massage,
            })
          dispatch({
            type : 'adddata',
            payload : data
          })
        }catch(err){
            dispatch({
                type : 'adddata',
                payload : err
            })
        }
    }
}