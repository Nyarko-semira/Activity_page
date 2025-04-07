import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect   } from 'react';
import { FaRegSquare } from 'react-icons/fa6';
import "../App.css"

const CustomModal = ({ show, handleClose, handleAddCheckedItems}) => {
  const items = ["Submit Onboaring form", "Submit UAT", "Application Training", "Api documentation", 
    "Test User Credentrails", "User Credentrails and Timelines", "Kick-off Meeting Atendance"];

    const [checkedItems, setCheckedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

   

   // Function to toggle "Select All"
  const handleSelectAll = () => {
    const newCheckedState = !selectAll;
    setSelectAll(newCheckedState);

    if (newCheckedState) {
      setCheckedItems([...items]); 
    
    } else {
      setCheckedItems([]); 
     

    }
  };
  
    // const handleCheckboxChange = (item, isChecked) => {
    //   setCheckedItems((prev) => {
    //     if (isChecked) {
    //       return [...prev, item];
    //     } else {
    //       return prev.filter((i) => i !== item);
    //     }
    //   });
    // };

    const handleCheckboxChange = (item) => {
      setCheckedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

    
  
  
    // Handle "Add" button click
    const handleAdd = () => {
      handleAddCheckedItems(checkedItems);  // Pass checked items to parent
      console.log(checkedItems)
    };

    //  useEffect to uncheck  seleteditems 

    useEffect(() => {
      if (show) {
        setCheckedItems([]); 
        setSelectAll(false);
      }
    }, [show]); 
    


  return (
    <> 
    <Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Add Requirement</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal-body-header">
        <h3>Name</h3>
        <input
              type="checkbox" 
              checked={selectAll}
              onChange={handleSelectAll}
            />
       
      </div>
      <div className="modal-body-info">
             {items.map((item, index) => (
          <div key={index} className='box'>
             <p>{item}</p>
            <input
              type="checkbox" 
              checked={checkedItems.includes(item)}
              onChange={(e) => handleCheckboxChange(item, e.target.checked)}
            />
          </div>
        ))}
        

      </div>


    </Modal.Body>
    <Modal.Footer>
        <Button  className='btn1' type="submit" variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button  className='btn2 d-flex align-items-center' type="submit" variant="info"  onClick={handleAdd}>
          Add</Button>
        
    </Modal.Footer>
  </Modal>
      
    </>
  )
}

export default CustomModal
