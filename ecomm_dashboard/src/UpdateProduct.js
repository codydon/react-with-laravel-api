import Header from './Header';
//import {withRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';


function UpdateProduct (props){
    const[data,setData] = useState([])

    //console.warn("props", props)
    let idd = props
    console.log(idd)
    useEffect( async () =>{
       let result = await fetch("http://localhost:8000/api/product/"+idd.id)
        result = await result.json();
        setData(result)
    })
    return(
        <>
            <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>UpdateProduct Page</h1>
            <input type="text" className="form-control" defaultValue={data.name} /> <br />
            <input type="text" className="form-control" defaultValue={data.price} /> <br />
            <input type="text" className="form-control" defaultValue={data.description} /> <br />
            <input type="file" className="form-control" defaultValue={data.file_path} /> <br />
            <img style={{width:100}} src={"http://localhost:8000/"+data.filepath} /> <br />
            <button className="btn btn-warning">Update Product</button>
        </div>
        </>
    )
}

export default UpdateProduct;