import { db } from "../firebase"
import { useEffect,useState } from "react";
import { collection , getDocs } from "firebase/firestore";
const comments = () => {
    const dataCollection = collection(db ,"Comments");
    const [data , setData] = useState([]);

    useEffect (() => {
        const getData = async () => {
        const dbValue = await getDocs(dataCollection)
        setData(dbValue.docs.map((doc) => ({ ...doc.data(),id: doc.id})));
        };
        getData()
    }, []);
    // console.log(data);
  return (
    <div>   
        <h1>Comments</h1>
        {
            data.map((dat) => {
                return(
                    <div>
                        <div className="card">
                        <p>PostId : {dat.postId}</p>
                            <p>Id : {dat.ID}</p>
                            <p>Name : {dat.name}</p>
                            <p>Email : {dat.email}</p>
                            <p>Comment : {dat.body}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default comments    


