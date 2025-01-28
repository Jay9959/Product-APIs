import axios from 'axios';
export const addNewProduct = () => {
    return {
        type: "ADD_NEW_PRODUCT",
    }
}

export const addProductRej = (msg) => {
    return {
        type: "ADD_NEW_PRODUCT_REJ",
        payload: msg
    }
}

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS",
        payload: data
    }
}


export const singleProduct = (data) => {
    return {
        type: "SINGLE_PRODUCT",
        payload: data
    }
}

export const updateProduct = () => {
    return {
        type: "UPDATE_PRODUCT",
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const getAllProductsAsync = () => {
    return (dispatch)=> {
        dispatch(loading())
        axios.get("http://localhost:3000/product")
        .then((res)=> {
            console.log(res);
            dispatch(getAllProducts(res.data))
        }).catch((err)=> {
            console.log(err);
            dispatch(addProductRej(err.message))
        })
    }
}


export const addProductAsync = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/product", data)
        .then((res)=> {
            console.log(res);
            dispatch(addNewProduct())
        }).catch((err)=> {
            console.log(err);
            dispatch(addProductRej(err.message))
        })
    }
}

export const deleteProductAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/product/${id}`)
        .then((res)=> {
            console.log(res);
            dispatch(getAllProductsAsync())
        }).catch((err)=> {
            console.log(err);
            dispatch(addProductRej(err.message))
        })
    }
}

export const singleProductAsync = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/product/${id}`)
        .then((res)=> {
            console.log(res);
            dispatch(singleProduct(res.data))
        }).catch((err)=> {
            console.log(err);
            dispatch(addProductRej(err.message))
        })
    }
}

export const updateProductAsync = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/product/${data.id}`, data)
        .then((res)=> {
            console.log(res);
            dispatch(updateProduct())
        }).catch((err)=> {
            console.log(err);
            dispatch(addProductRej(err.message))
        })
    }
}