import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faImage } from '@fortawesome/free-solid-svg-icons';
import './AddCategory.scss';
import { Link } from 'react-router-dom';

const AddCategory = () => {
    const [image, setImage] = useState(null);

    const handleAddImageClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <section id="addcategory">
            <div className="category">
                <div className="category-header">
                    <h2>Categories</h2>
                    <div className="category-buttons">
                        <Link to="/categories" className="cancel-button">
                            <FontAwesomeIcon icon={faTimes} /> Cancel
                        </Link>

                        <a href="#" className="submit-button">Submit  </a>
                    </div>
                </div>
                <div className="thumbnail">
                    <div className="class-media">
                        <h3>Thumbnail</h3>
                        <label htmlFor="ProductMedia">Photo</label>
                        <div className="media-box">
                            {image ? (
                                <img src={image} alt="Uploaded" className="uploaded-image" />
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faImage} size="3x" color="#4318FF" />
                                    <div className="media-text">
                                        <p>Drag and drop a file here or click add image</p>
                                        <a href="#" className="add-image-button" onClick={handleAddImageClick}>Add Image</a>
                                    </div>
                                </>
                            )}
                            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                        </div>
                    </div>

                    <div className="category-content">
                        <div className="category-form">
                            <h3>General Information</h3>
                            <label htmlFor="categoryName">Category Name</label>
                            <input id="categoryName" type="text" placeholder="Type category name here..." />
                            <label htmlFor="categoryDescription">Description</label>
                            <div className="textdescription"> <input id="categoryDescription" type="text" placeholder="Type category description here..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default AddCategory;
