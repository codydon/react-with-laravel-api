<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req){
        $product = new Product();
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        $product->file_path = $req->file('file')->store('products');
        $product->save();

        //return $req->file('file')->store('products');
        return $product;
    }

    function list(){
        return Product::all();
    }

    function deleteProduct($id){ 
        $data = Product::where('id', $id)->delete();
        if($data){
            return ['result' =>'Product has been deleted'];
        }
        else{
            return ['result' =>'deleteProduct failed'];
        }
    }

    function getProduct($id){
        return Product::find($id);
    }

    function search($key){
        return Product::where('name', 'like', "%$key%")->get();
    }
}
