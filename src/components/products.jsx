import { db } from "../firebase"
import { useEffect,useState } from "react";
import { collection , getDocs } from "firebase/firestore";
const products = () => {
    const dataCollection = collection(db ,"product");
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
        <h1>Products</h1>
        {
            data.map((dat) => {
                return(
                    <div>
                        <div className="card1">
                            <p>Id : {dat.ID}</p>
                            <p>Name : {dat.name}</p>
                            <p>Description : {dat.description}</p>
                            <p>Brand : {dat.brand}</p>
                            <p>Connectivity : {dat.connectivity}</p>
                            <p>Img : <a href={dat.img} target="_blank">click</a></p>
                            <p>Price : {dat.price} $</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default products    


