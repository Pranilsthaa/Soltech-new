/* eslint-disable react/prop-types */
import { useState, useEffect, forwardRef } from 'react';
import { FiDownload, FiPlus, FiSearch, FiCalendar, FiSliders, FiEdit, FiEye, FiTrash } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMinus, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './product.scss';
import { products } from './productsData';
import { format } from 'date-fns';


const getStatusColorClass = (status) => {
    switch (status) {
        case 'Published':
            return 'published';
        case 'Low Stock':
            return 'low-stock';
        case 'Out of Stock':
            return 'out-of-stock';
        case 'Draft':
            return 'draft';
        default:
            return '';
    }
};

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-date-input" onClick={onClick} ref={ref}>
        <FiCalendar className="calendar-icon" />
        <input type="text" value={value} readOnly placeholder="Select Date" />
    </div>
));

const DropdownMenu = ({ options, onSelect }) => {
    return (
        <ul className="dropdown-menu">
            {options.map(option => (
                <li key={option.value} onClick={() => onSelect(option.value)}>
                    {option.label}
                </li>
            ))}
        </ul>
    );
};

const Product = () => {
    const [startDate, setStartDate] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const rowsPerPage = 2; 

    useEffect(() => {
        setCurrentPage(1); 
    }, [searchInput]);

    const handleDropdownClick = (key) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    const handleOptionSelect = (value) => {
        setActiveDropdown(null);
        setSelectedStatus(value);
    };

    const handleCheckboxClick = (productId) => {
        const row = document.getElementById(`product-row-${productId}`);
        row.classList.toggle("selected");
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const productSortOptions = [
        { label: 'Name: A to Z', value: 'name-asc' },
        { label: 'Name: Z to A', value: 'name-desc' },
    ];
    
    const stockSortOptions = [
        { label: 'Low to High', value: 'stock-low-high' },
        { label: 'High to Low', value: 'stock-high-low' },
    ];
    
    const priceSortOptions = [
        { label: 'Price: Low to High', value: 'price-low-high' },
        { label: 'Price: High to Low', value: 'price-high-low' },
    ];
    
    const statusSortOptions = [
        { label: 'All', value: 'All' }, 
        { label: 'Published', value: 'Published' },
        { label: 'Low Stock', value: 'Low Stock' },
        { label: 'Out of Stock', value: 'Out of Stock' },
        { label: 'Draft', value: 'Draft' },
    ];
    
    
    const addedSortOptions = [
        { label: 'Added: Low to High', value: 'added-low-high' },
        { label: 'Added: High to Low', value: 'added-high-low' },
    ];
    

    const startIndex = (currentPage - 1) * rowsPerPage;
    const filteredProducts = selectedStatus && selectedStatus !== 'All'
    ? products.filter(product => 
        product.status === selectedStatus && 
        product.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        (!startDate || format(new Date(product.added), 'yyyy-MM-dd') === format(startDate, 'yyyy-MM-dd'))
    )
    : products.filter(product => 
        product.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        (!startDate || format(new Date(product.added), 'yyyy-MM-dd') === format(startDate, 'yyyy-MM-dd'))
    );
  

    const currentProducts = filteredProducts.slice(startIndex, startIndex + rowsPerPage);
    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

    return (
        <section id="product">
            <div className="main-product">
                <div className="product-header">
                    <h2>Product</h2>
                    <div className="product-buttons">
                        <a href="#" className="export-button">
                            <FiDownload /> Export
                        </a>
                        <Link to="/add-product" className="add-button">
                            <FiPlus /> Add Product
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="first-product">
                        <a href="#" className="button">All Product</a>
                        <a href="#" className="button">Published</a>
                        <a href="#" className="button">Low Stock</a>
                        <a href="#" className="button">Draft</a>
                    </div>
                    <div className="row-two">
                    <div className="search-container">
                            <input 
                                type="text" 
                                placeholder="Search Product..." 
                                className="search-input" 
                                value={searchInput} 
                                onChange={(e) => setSearchInput(e.target.value)} />
                            <FiSearch className="search-icon" />
                        </div>
                        <div className="date-container">
                            <div className="date-select">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    customInput={<CustomDateInput />}
                                />
                            </div>
                        </div>
                        <div className="filter-container">
                            <div className="filter-select">
                                <FiSliders className="filter-icon" />
                                <span>Filters</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className="checkbox-minus">
                                        <input type="checkbox" id="minus-checkbox" />
                                        <label htmlFor="minus-checkbox">
                                            <FontAwesomeIcon icon={faMinus} className="minus-icon" />
                                        </label>
                                    </div>
                                </th>
                                <th onClick={() => handleDropdownClick('product')}>
                                    Product <FontAwesomeIcon icon={faCaretDown} className="chevron-icon" />
                                    {activeDropdown === 'product' && <DropdownMenu options={productSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th style={{ paddingLeft: '20px', paddingRight: '10px' }}>SKU</th>
                                <th style={{ paddingLeft: '10px', paddingRight: '30px' }}>Category</th>
                                <th onClick={() => handleDropdownClick('stock')}>
                                    Stock <FontAwesomeIcon icon={faCaretDown} className="chevron-icon" />
                                    {activeDropdown === 'stock' && <DropdownMenu options={stockSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('price')}>
                                    Price <FontAwesomeIcon icon={faCaretDown} className="chevron-icon" />
                                    {activeDropdown === 'price' && <DropdownMenu options={priceSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('status')}>
                                    Status <FontAwesomeIcon icon={faCaretDown} className="chevron-icon" />
                                    {activeDropdown === 'status' && <DropdownMenu options={statusSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('added')}>
                                    Added <FontAwesomeIcon icon={faCaretDown} className="chevron-icon" />
                                    {activeDropdown === 'added' && <DropdownMenu options={addedSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.length > 0 ? (
                                currentProducts.map(product => (
                                    <tr key={product.id} id={`product-row-${product.id}`} onClick={() => handleCheckboxClick(product.id)}>
                                        <td>
                                            <div className="checkbox">
                                                <input type="checkbox" id={`product-checkbox-${product.id}`} />
                                                <label htmlFor={`product-checkbox-${product.id}`} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="product-info">
                                                <div className="product-image">
                                                    {/* Placeholder box for product image */}
                                                    <div className="image-placeholder" ></div>
                                                </div>
                                                <div className="product-details">
                                                    <p>{product.name}</p>
                                                    <p>{product.variants.length} Variants</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.sku}</td>
                                        <td>{product.category}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <div className="status-box">
                                                <span className={getStatusColorClass(product.status)}>{product.status}</span>
                                            </div>
                                        </td>

                                        <td>{product.added}</td>
                                        <td>
                                            <div className="action-icons">
                                                <FiEdit className="icon" />
                                                <FiEye className="icon" />
                                                <FiTrash className="icon" />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="no-data-message">No products to display</td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot className="table-footer">
                            <tr>
                                <td colSpan="9">
                                    <div className="footer-content">
                                        <span>Showing Products: {Math.min(currentPage * rowsPerPage, products.length)} of {products.length}</span>

                                        <div className="pagination-box">
                                            <div className="pagination-item" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                <FontAwesomeIcon icon={faCaretLeft} />
                                            </div>
                                            {[...Array(totalPages)].slice(0, 5).map((_, i) => (
                                                <div className={`pagination-item ${currentPage === i + 1 ? 'active-page' : ''}`} key={i} onClick={() => handlePageChange(i + 1)}>
                                                    <span className="pagination-number">{i + 1}</span>
                                                </div>
                                            ))}
                                            {totalPages > 5 && (
                                                <div className="pagination-item">
                                                    <span className="ellipsis">...</span>
                                                </div>
                                            )}
                                            <div className="pagination-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Product;
