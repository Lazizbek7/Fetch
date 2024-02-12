import { db } from "../firebase"
import { useEffect,useState } from "react";
import { collection , getDocs } from "firebase/firestore";
const store = () => {
    const dataCollection = collection(db ,"store");
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
        <h1>Books</h1>
        {
            data.map((dat) => {
                return(
                    <div>
                        <div className="card">
                        <p>Author : {dat.Author}</p>
                        <p>Subject : {dat.Subject}</p>
                        <p>Language : {dat.Language}</p>
                        <p>Publisher : {dat.Publisher}</p>
                        <p>Media type : {dat.MediaType}</p>
                        <p>Page : {dat.page}</p>
                        <p>Price : {dat.price} sums</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default store    


