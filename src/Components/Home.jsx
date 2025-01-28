import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProducts, getAllProductsAsync } from "../services/actions/product.Action";
import { useNavigate } from "react-router";

function Home() {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);
  return (
    <div className="border border-5 border-dark p-1">
      {isLoading ? <h2>Loading....</h2> : products.length == 0 ? (
        <h4>Product Not Found</h4>
      ) : (
        <table width={'100%'}>
          <thead className="border border-5 border-dark">
            <tr>
              <th className="border border-5 border-dark">id</th>
              <th className="border border-5 border-dark">Product Name</th>
              <th className="border border-5 border-dark">Prodict Category</th>
              <th className="border border-5 border-dark">Product Price </th>
              <th className="border border-5 border-dark">Product description</th>
              <th className="border border-5 border-dark" colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody >
            {products.map((product) => (
              <tr key={product.id} >
                <td className="border border-5 border-dark">{product.id}</td>
                <td className="border border-5 border-dark">{product.name}</td>
                <td className="border border-5 border-dark">{product.category}</td>
                <td className="border border-5 border-dark">{product.price}</td>
                <td className="border border-5 border-dark">{product.description}</td>
                <td className="border border-5 border-dark">
                  <button className="me-3" onClick={() => handleEdit(product.id)}>Product Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Product Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
