import { db } from "../firebase"
import { useEffect,useState } from "react";
import { collection , getDocs } from "firebase/firestore";
const user = () => {
    const dataCollection = collection(db ,"users");
    const [data , setData] = useState([]);

    useEffect (() => {
        const getData = async () => {
        const dbValue = await getDocs(dataCollection)
        setData(dbValue.docs.map((doc) => ({ ...doc.data(),id: doc.id})));
        };
        getData()
    }, []);
  return (
    <div>
        <h1>Users</h1>
        {
            data.map((dat) => {
                return(
                    <div>
                        <div className="card">
                             <p> Id : {dat.Id}</p>
                             <p> Username : {dat.username}</p>
                             <p> Name : {dat.name}</p>
                            <p>  Country : {dat.Country}</p>
                             <p> Password : {dat.password}</p>
                            <p>  State : {dat.state}</p>
                            {/* <p> Locked : {dat.locked}</p> */}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default user    