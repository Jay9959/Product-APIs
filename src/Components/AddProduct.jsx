import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductAsync } from "../services/actions/product.Action";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const { error, isCreated } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productInput, setProductInput] = useState({
    image: "",
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setProductInput({
      ...productInput,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!productInput.image.trim()) newErrors.name = "Image is required";
    if (!productInput.name.trim()) newErrors.name = "Product name is required";
    if (!productInput.category.trim()) newErrors.category = "Category is required";
    if (!productInput.price.trim() || isNaN(productInput.price) || productInput.price <= 0) {
      newErrors.price = "Enter a valid price";
    }
    if (!productInput.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let id = generateUniqueId({ length: 3, useLetters: false });
      dispatch(addProductAsync({ ...productInput, id }));
    }
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/");
    }
  }, [isCreated]);

  return (
    <>
      <Container>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Image
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Image"
                name="image"
                value={productInput.image}
                onChange={handleChanged}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
            </Col>
          </Form.Group>

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
                onChange={handleChanged}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
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
                onChange={handleChanged}
                isInvalid={!!errors.category}
              />
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="tel"
                placeholder="Enter Price"
                name="price"
                value={productInput.price}
                onChange={handleChanged}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
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
                onChange={handleChanged}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sty sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Add Product</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
