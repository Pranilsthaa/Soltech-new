/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './category.scss';
import { FiDownload, FiPlus } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMinus, faPen, faEye, faTrash, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { category } from './categoryData';
import { Link } from 'react-router-dom';
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

const Category = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    const handleDropdownClick = (key) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleCheckboxClick = (categoryId) => {
        const row = document.getElementById(`category-row-${categoryId}`);
        row.classList.toggle("selected");
    };

    const handleOptionSelect = (value) => {
        setActiveDropdown(null);
        setSelectedStatus(value);
    };

    const categorySortOptions = [
        { label: 'Name: A to Z', value: 'name-asc' },
        { label: 'Name: Z to A', value: 'name-desc' },
    ];

    const soldSortOptions = [
        { label: 'Low to High', value: 'stock-low-high' },
        { label: 'High to Low', value: 'stock-high-low' },
    ];

    const stockSortOptions = [
        { label: 'Price: Low to High', value: 'price-low-high' },
        { label: 'Price: High to Low', value: 'price-high-low' },
    ];

    const addedSortOptions = [
        { label: 'Added: Low to High', value: 'added-low-high' },
        { label: 'Added: High to Low', value: 'added-high-low' },
    ];

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentCategory = category.slice(startIndex, endIndex);
    const totalPages = Math.ceil(category.length / rowsPerPage);

    const renderPagination = () => {
        const paginationItems = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(
                    <div className={`pagination-item ${currentPage === i ? 'active-page' : ''}`} key={i} onClick={() => handlePageChange(i)}>
                        <span className="pagination-number">{i}</span>
                    </div>
                );
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);

            if (startPage > 1) {
                paginationItems.push(
                    <div className="pagination-item" key={1} onClick={() => handlePageChange(1)}>
                        <span className="pagination-number">1</span>
                    </div>
                );
                if (startPage > 2) {
                    paginationItems.push(
                        <div className="pagination-item" key="start-ellipsis">
                            <span className="ellipsis">...</span>
                        </div>
                    );
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(
                    <div className={`pagination-item ${currentPage === i ? 'active-page' : ''}`} key={i} onClick={() => handlePageChange(i)}>
                        <span className="pagination-number">{i}</span>
                    </div>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationItems.push(
                        <div className="pagination-item" key="end-ellipsis">
                            <span className="ellipsis">...</span>
                        </div>
                    );
                }
                paginationItems.push(
                    <div className="pagination-item" key={totalPages} onClick={() => handlePageChange(totalPages)}>
                        <span className="pagination-number">{totalPages}</span>
                    </div>
                );
            }
        }

        return paginationItems;
    };

    return (
        <section id="category">
            <div className="main-category">
                <div className="category-header">
                    <h2>Categories</h2>
                    <div className="category-buttons">
                        <a href="#" className="export-button">
                            <FiDownload /> Export
                        </a>
                        <Link to="/add-category" className="add-button">
                            <FiPlus /> Add Category
                        </Link>
                    </div>
                </div>
                <div className="category-table-container">
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
                                    Product <FontAwesomeIcon icon={faCaretDown} className="category-icon" />
                                    {activeDropdown === 'product' && <DropdownMenu options={categorySortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('sold')}>
                                    Sold <FontAwesomeIcon icon={faCaretDown} className="category-icon" />
                                    {activeDropdown === 'sold' && <DropdownMenu options={soldSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('stock')}>
                                    Stock <FontAwesomeIcon icon={faCaretDown} className="category-icon" />
                                    {activeDropdown === 'stock' && <DropdownMenu options={stockSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th onClick={() => handleDropdownClick('added')}>
                                    Added <FontAwesomeIcon icon={faCaretDown} className="category-icon" />
                                    {activeDropdown === 'added' && <DropdownMenu options={addedSortOptions} onSelect={handleOptionSelect} />}
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCategory.length > 0 ? (
                                currentCategory.map(category => (
                                    <tr key={category.id} id={`category-row-${category.id}`} onClick={() => handleCheckboxClick(category.id)}>
                                        <td>
                                            <div className="checkbox">
                                                <input type="checkbox" id={`category-checkbox-${category.id}`} />
                                                <label htmlFor={`category-checkbox-${category.id}`} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="category-info">
                                                <div className="category-image">
                                                    <div className="image-placeholder"></div>
                                                </div>
                                                <div className="category-details">
                                                    <p>{category.name}</p>
                                                    <p>{category.discription}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{category.sold}</td>
                                        <td>{category.stock}</td>
                                        <td>{category.added}</td>
                                        <td>
                                            <div className="action-icons">
                                                <FontAwesomeIcon icon={faPen} className="three-icon" />
                                                <FontAwesomeIcon icon={faEye} className="three-icon" />
                                                <FontAwesomeIcon icon={faTrash} className="three-icon" />
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
                                <td colSpan="6">
                                    <div className="footer-content">
                                        <span>Showing: {Math.min(currentPage * rowsPerPage, category.length)} of {category.length}</span>
                                        <div className="pagination-box">
                                            <div className="pagination-item" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                <FontAwesomeIcon icon={faCaretLeft} />
                                            </div>
                                            {renderPagination()}
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
}

export default Category;
