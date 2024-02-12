import { db } from "../firebase"
import { useEffect,useState } from "react";
import { collection , getDocs } from "firebase/firestore";
const persons = () => {
    const dataCollection = collection(db ,"persons");
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
        <h1>People</h1>
        {   
            data.map((dat) => {
                return(
                    <div>
                        <div className="card">
                            <p>FirstName : {dat.FirstName}</p>
                            <p>LastName : {dat.LastName} </p>
                            <p>Age : {dat.Age}</p>
                            <p>Country : {dat.Contacts.Country} </p>
                            <p>Phone : {dat.Contacts.phone} </p>
                            <p>Email : {dat.Contacts.email} </p>
                            
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default persons    


