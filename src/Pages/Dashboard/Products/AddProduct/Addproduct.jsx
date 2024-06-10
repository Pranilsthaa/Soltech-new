import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faImage } from '@fortawesome/free-solid-svg-icons';
import './Addproduct.scss';
import { Link } from 'react-router-dom';
const AddProduct = () => {
  return (
    <div className="product">
      <div className="product-header">
        <h2>Add Product</h2>
        <div className="product-buttons">
          <Link to="/products" className="cancel-button">
            <FontAwesomeIcon icon={faTimes} /> Cancel
          </Link>

          <a href="#" className="submit-button">Submit  </a>
        </div>
      </div>
      <div className="main">
        <div className="product-content">
          <div className="product-form">
            <h3>General Information</h3>
            <label htmlFor="productName">Product Name</label>
            <input id="productName" type="text" placeholder="Type product name here..." />
            <label htmlFor="productDescription">Description</label>
            <input id="productDescription" type="text" placeholder="Type product description here..." />
          </div>

        </div>
        <div className="additional-containers">
          <div className="categories">
            <h3>Category</h3>
            <label htmlFor="productCategory">Product Category</label>
            <select id="productCategory">
              <option disabled selected>Select a category...</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>

          </div>
          <div className="status">
            <div className="heading">
              <h3>Status</h3>
              <button className="draft">Draft</button>
            </div>
            <label htmlFor="productStatus">Product Status</label>
            <select id="productStatus">
              <option disabled selected>Draft</option>
              <option value="status1">Status 1</option>
              <option value="status2">Status 2</option>
              <option value="status3">Status 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Tags">
        <div className="class-tags">
          <h3>Product Tags</h3>
          <label htmlFor="ProductTags">Tags</label>
          <input id="productName" type="text" placeholder="Type product name here..." />
        </div>
      </div>
      <div className="media">
        <div className="class-media">
          <h3>Media</h3>
          <label htmlFor="ProductMedia">Photo</label>
          <div className="media-box">
            <FontAwesomeIcon icon={faImage} size="3x" color="#4318FF" />
            <div className="media-text">
              <p>Drag and drop a file here or click add image</p>
              <a href="#" className="add-image-button">Add Image</a>
            </div>
          </div>
        </div>
        <div className="Pricing">
          <div className="class-pricing">
            <h3>Pricing</h3>
            <label htmlFor="ProductPrice">Base Price</label>
            <input id="productPrice" type="text" placeholder="Type product name here..." />
            <div className="joint">
              <div className="joint-first">
                <label htmlFor="ProductPrice">Discount Type</label>
                <select id="discount">
                  <option disabled selected>Select a Discount Type</option>
                  <option value="status1">Status 1</option>
                  <option value="status2">Status 2</option>
                  <option value="status3">Status 3</option>
                </select>
              </div>
              <div className="joint-second">
                <label htmlFor="ProductPrice">Discount Percentage (%)</label>
                <input id="productPrice" type="text" placeholder="Type discount percentage..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
