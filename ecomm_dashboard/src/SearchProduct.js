import Header from './Header';
import {useState} from 'react';
import {Table} from 'react-bootstrap';

function SearchProduct (){

    const[data, setData] = useState([])
    async function search(key)
    {
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        setData(result)
        //console.warn(result)
    }
    
    return(
        <div>
            <Header />
            <h5>Search Product Page</h5>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search product" /> <br />
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
                    </tr>
                )
            }
            </tbody>
        </Table>
            </div>


        </div>
    ) 
}

export default SearchProduct;