import { useEffect, useState } from "react"

export const AdminUsers = () => {
    const [products, setProducts] = useState([]);

    const getAllUsersData = async () => {
        try {
            let response = await fetch("http://localhost:4000/users", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setProducts(data);
            console.warn(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUsersData();
    }, []);

    return <>
        <div className="product-list">
            <h3>Ragister List</h3>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Email</li>
                <li>Password</li>
            </ul>
            {
                products.map((item,index)=>
                   
                <ul>
                <li>{index+1}</li>
                <li>{ item.user_name}</li>
                <li>{item.user_email}</li>
                <li>{item.user_password}</li>
            </ul>
                )
            }
        </div>
    </>


};