import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import * as productService from '../../services/product.js'
import {infor} from '../../services/user.js'
export default function Product(){
    const [farmer,setFarmer]=useState(null);
    const [products,setProducts]=useState([]);
    const [searchQuery,setSearchQuery]=useState("");
    const [filtered, setFiltered] = useState(products);
    const [show,setShow]=useState(false);
    const [editingProductId, setEditingProductId] = useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
         const res=await infor();
         const allProducts=await productService.getProductsForFarmer();
         setFarmer(res.name);
         setProducts(allProducts);
         const token = localStorage.getItem("farmerToken");
        if (!token) {
         window.location.href = "/farmerlogin";
            }
        }
        fetchData();
    },[]);
    const handleLogout=()=>{
        localStorage.removeItem("farmerToken");
        window.location.href="/farmerlogin";
    }
    const handleSave = async(e) => {
        e.preventDefault();
        try {
             const updateProduct=await productService.updateProduct({
            productId:editingProductId,
            description:e.target.edescription.value,
            price:e.target.eprice.value,
            quantity:e.target.equantity.value,
        })
        setEditingProductId(null);
        } catch (error) {
            console.log(error);
            throw error
        }
       
        }
        const handleDelete=async(e)=>{
            e.preventDefault();
            await productService.deleteProduct(editingProductId);
            setEditingProductId(null);
            window.location.reload();   
        }
    const handleSearch=async(e)=>{
        e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
         if (!query) {
        setShow(true);
        setFiltered([]);
        return;
        }
    const results = products.filter((p) =>
    p.name.toLowerCase().includes(query));
    console.log(results);
        if(results.length>0){
            setShow(true);
            setFiltered(results);
        }else {
    setShow(true);
    setFiltered([]);
  }
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const productData={
            name:e.target.name.value,
            description:e.target.description.value,
            price:e.target.price.value,
            quantity:e.target.quantity.value,
            imageUrl:e.target.imageUrl.value,
        };
        try {
            const res=await productService.addProduct(productData);
            alert("Product added successfully");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
           <div className="flex items-center justify-between px-20 py-5 bg-[#004C3F] text-white shadow-xl">
                <div className="text-2xl font-bold">
                    AGRICONNECT
                </div>
                <div className="flex space-x-10">
            <Link to="/farmerdashboard" className="text-[28px] hover:text-gray-300">Home</Link>
            <Link to="/product" className="text-[28px] hover:text-gray-300  text-gray-400 underline underline-offset-10">Products</Link>
            <Link to="/orders" className="text-[28px] hover:text-gray-300">Orders</Link>
            <Link to="/marketplace" className="text-[28px] hover:text-gray-300">Marketplace</Link>
            <button onClick={handleLogout} className="text-[28px] hover:text-gray-300">Log out</button>
                </div>
            
            </div>
            <div className="px-20">
            <h1 className="text-[28px]/[100px] font-semibold">Welcome Farmer {farmer}</h1>
            <p className="text-[21px]">This is where you manage all your products</p>
            <div className="grid grid-cols-3 gap-10">
            <form onSubmit={handlesubmit} className="mt-6 space-y-4 shadow-xl p-6">
                <h1 className="w-40 mx-auto">Add a product</h1>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Product Name
                    </label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 px-3 py-1"/>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea id="description" name="description" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                    
                        type="number"
                        id="price"
                        name="price"
                        required
                        className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none mt-1 px-3 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                 <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        required
                        className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none mt-1 px-3 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        required
                        className="mt-1 px-3 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                    Add Product
                </button>
            </form>
            <div className="col-span-2">
                <div>
                <span className="font-bold">Search Filter</span>
                <div className="grid grid-cols-1 gap-5 my-5">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search products name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 mr-2"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700"
                    >
                      Search
                    </button>
                  </form>
                   <div className={`h-[430px] overflow-y-auto space-y-4 ${show?"hidden":""}`}>
                  {products.map((product)=>(
                    <div key={product._id} className={` bg-white rounded-xl shadow-md p-4 text-black grid grid-cols-2 gap-1`}>
                      {editingProductId === product._id ? (
                    <form onSubmit={handleSave} className="col-span-2 flex flex-col space-y-2">
                     <p>{product.name}</p>
                    <textarea name='edescription' type="text" defaultValue={product.description} className="border rounded px-2 py-1" />
                    <input name="eprice" type="number" defaultValue={product.price} className="border rounded px-2 py-1" />
                    <input name="equantity" type="number" defaultValue={product.quantity} className="border rounded px-2 py-1" />
                    <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded" type="submit">Save</button>
                    <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => setEditingProductId(null)}>Cancel</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleDelete}>Delete</button>
                </div>
                </form>
                     ) :
                    (<><div className="col-span-1">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded-md" />
                      </div>
                      <div className="col-span-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div>
                          <span className="font-bold">Price:</span> ${product.price}
                          </div>
                          <div className="flex space-x-4">
                            <span className="text-green-500 cursor-pointer" onClick={() => setEditingProductId(product._id)}>Edit</span></div>
                        </div>
                      </div></>)}
                    </div>
                  ))}
                  </div>
                  <div className={`h-[430px] overflow-y-auto space-y-4 ${show?"":"hidden"}`}>
                  {filtered.map((product)=>(
                    <div key={product._id} className="bg-white rounded-xl shadow-md p-4 text-black grid grid-cols-2 gap-1">
                      {editingProductId === product._id ? (
                    <form onSubmit={handleSave} className="col-span-2 flex flex-col space-y-2">
                     <p>{product.name}</p>
                    <textarea name='edescription' type="text" defaultValue={product.description} className="border rounded px-2 py-1" />
                    <input name="eprice" type="number" defaultValue={product.price} className="border rounded px-2 py-1" />
                    <input name="equantity" type="number" defaultValue={product.quantity} className="border rounded px-2 py-1" />
                    <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded" type="submit">Save</button>
                    <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => setEditingProductId(null)}>Cancel</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleDelete}>Delete</button>
                </div>
                </form>
                     ):(
                     <><div className="col-span-1">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded-md" />
                      </div>
                      <div className="col-span-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div>
                          <span className="font-bold">Price:</span> ${product.price}
                          </div>
                          <div className="flex space-x-4">
                          <span className="text-green-500 cursor-pointer" onClick={() => setEditingProductId(product._id)}>Edit</span>
                          </div>
                        </div>
                      </div></>)}
                    </div>
                  ))}
                   <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600" onClick={() => setShow(false)}>List all products</button>
                  </div>
                 {filtered.length === 0 && show && (
                    <> <p className="text-gray-500 mt-2">No products found.</p>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600" onClick={() => setShow(false)}>List all products</button>
                    </>  
                  )}
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )}