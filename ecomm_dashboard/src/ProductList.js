import React, {useState, useEffect} from 'react'
import Header from './Header';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function ProductList() {
    const[data, setData] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deleteProduct/"+id, {
            method :'DELETE'
        });
        result = await result.json();
        console.log(result);
        getData();
    }

    async function getData(){
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
        <Header />
        <h1>Product List Page</h1>
        <Table>
            <tbody>
            <tr >
                <td>Id </td>
                <td>Name </td>
                <td>Price </td>
                <td>Description </td>
                <td>Image </td>
                <td>Operations </td>
            </tr>
            {
                data.map((item)=>
                    <tr>
                        <td> {item.id} </td>
                        <td> {item.name} </td>
                        <td> {item.price }</td>
                        <td> {item.description} </td>
                        <td> <img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt="" /> </td>
                        <td> <span> <button  onClick={() =>deleteOperation(item.id)}  className="btn btn-danger">Delete</button> </span></td> 
                        <td>
                            <Link to={"update/" + item.id} key = {item.id}>
                                <button className="btn btn-warning">Update</button>
                            </Link>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    </div>
    )
}

export default ProductList;


