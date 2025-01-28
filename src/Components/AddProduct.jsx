import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductAsync, addNewProduct } from "../services/actions/product.Action";
import generateUniqueId  from "generate-unique-id";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const {error, isCreated} = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productInput, setProductInput] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handelChanged = (e) => {
    const { name, value } = e.target;
    setProductInput({
      ...productInput,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({
      length: 3,
      useLetters: false,
    });
    dispatch(addProductAsync({ ...productInput, id }));
  };

  useEffect(()=> {
    if(isCreated){
      navigate("/")
    }
  }, [isCreated])

  return (
    <>
      <Container>
        {error ? <p>{error}</p> : ""}
        <Form onSubmit={handelSubmit}>

          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="Name"
                value={productInput.name}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group> */}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={productInput.name}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                value={productInput.category}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                placeholder="Enter Price"
                name="price"
                value={productInput.price}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="description"
                value={productInput.description}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="10">
              <Button type="submit">Add Product</Button>
            </Col>
          </Form.Group>

        </Form>
      </Container>
    </>
  );
}

export default AddProduct;