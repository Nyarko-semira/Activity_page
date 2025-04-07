import React from 'react'
import "../../Components/Requirement.css"
import Button from 'react-bootstrap/Button';
import { FaPlus } from 'react-icons/fa';
import { FaRegSave } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';
import CustomModal from '../CustomModal';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useEffect } from 'react';



const Requirement_tab = ({setReq}) => {

  const [showModal, setShowModal] = useState(false);
  const [addedItems, setAddedItems] = useState([]);



  // useEffect(() => {
  //   const savedItems = JSON.parse(localStorage.getItem('addedItems')) || [];
  //   setAddedItems(savedItems);
  // }, []);

  // // Save added items to localStorage whenever they change
  // useEffect(() => {
  //   if (addedItems.length > 0) {
  //     localStorage.setItem('addedItems', JSON.stringify(addedItems));
  //   }
  // }, [addedItems]);


  // Save button
  
  
  const handleSave = () => {
    console.log(addedItems)
  }



  //  Add Function
  const handleAddCheckedItems = (checkedItems) => {
    setAddedItems(checkedItems);
    setReq(checkedItems)
    setShowModal(false);
  };


  const handleDeleteItem = (itemToDelete) => {
    setAddedItems(addedItems.filter(item => item !== itemToDelete));
  };


  return (
    <div className="main">
      <div className='Main-container'>
        <div className='header'>
          <Button type='submit'
            className='header-btn d-flex align-items-center'
            variant="outline-dark"
            onClick={() => setShowModal(true)}>
            <FaPlus className='me-2' />
            Add
          </Button>
          <CustomModal show={showModal}
            handleClose={() => setShowModal(false)}
            handleAddCheckedItems={handleAddCheckedItems} setReq={setReq} />
        </div>

        <div className="named">
          <div className="Name-tab">
            <p>Name</p>
            <p className='action'>Action</p>
          </div>

          <div className="display-name">
            {/* <h3 className='records'>No records to display</h3> */}
            {addedItems.map((addedItem, index) => (
              <div key={index} className='boxx '>
                <p>{addedItem}</p>
                <FaTrash className='delete-icon' onClick={() => { handleDeleteItem(addedItem) }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className='btns'>
        <Button className='btn1' type="submit" variant="secondary"  onClick={() => {handleClose}} >Cancel</Button>
        <Button className='btn2 d-flex align-items-center' type="submit" variant="info">
          <FaRegSave className='me-2' onClick={handleSave} />
          Save</Button>
      </div>
    </div>

  )
}

export default Requirement_tab
