import React from 'react'
import "../../Components/Requirement.css"
import Button from 'react-bootstrap/Button';
import { FaPlus } from 'react-icons/fa';
import { FaRegSave } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';


const Requirement_tab = () => {
  return (
    <div className="main">
    <div className='Main-container'>
      <div className='header'>
        <Button type='submit' className='header-btn d-flex align-items-center'  variant="outline-dark">
        <FaPlus  className='me-2'/>
         Add
        </Button>
      </div>

      <div className="Name-tab">
        <p>Name</p>
        <p className='action'>Action</p>
      </div>

      <h3 className='records'>No records to display</h3>

      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      
      </div>
      <hr/>
      <div className='btns'>
        <Button  className='btn1' type="submit" variant="secondary">Cancel</Button>
        <Button  className='btn2 d-flex align-items-center' type="submit" variant="info">
        <FaRegSave  className='me-2' />
          Save</Button>
        </div>
    </div>
  )
}

export default Requirement_tab
