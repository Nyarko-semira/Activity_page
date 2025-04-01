import React from 'react'
import "../../Components/Requirement.css"
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import { FaRegSave } from 'react-icons/fa';


const Activitytab = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data);

  return (
    <div className='main_tab'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className='label'>Code</Form.Label>
            <Form.Control
              {...register("Code", { required: true })}
              aria-invalid={errors.Code ? "true" : "false"}
              type="text"
              placeholder="Enter Code"
            />
            {errors.Code?.type === "required" && (
              <p className="text-danger" role="alert">Code is required</p>
            )}


          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className='label'>Name</Form.Label>
            <Form.Control
              {...register("Name", { required: true })}
              aria-invalid={errors.Name ? "true" : "false"}
              type="text"
              placeholder="Enter Name"

            />
            {errors.Name?.type === "required" && (
              <p  className="text-danger" role="alert">Activity name is required</p>
            )}

          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label className='label'>TAT(Days)</Form.Label>
            <Form.Control
              {...register("TAT", { required: true })}
              aria-invalid={errors.TAT ? "true" : "false"}
              type="text"
              placeholder="Enter turn arround time"
            />
            {errors.TAT?.type === "required" && (
              <p  className="text-danger" role="alert">TAT is required</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='label'>Escalation Mailing List</Form.Label>
            <Form.Control as="textarea" rows={3} className='field'
              {...register("Mail", { required: true })}
              aria-invalid={errors.Mail ? "true" : "false"}
              placeholder='Select escalation mailing list , Pleaase seperate each email with a ";"'
            />
            {errors.Mail?.type === "required" && (
              <p className="text-danger" role="alert">Email is  required</p>
            )}
          </Form.Group>
        </Row>


        <Row className="mb-3">
          <Col md="4">
            <Form.Label className="label">Activity Type</Form.Label>
            <Form.Select
              {...register("Process", { required: "Activity Type is required" })}
              aria-invalid={errors.Process ? "true" : "false"}
            >
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            {errors.Process && <p  className="text-danger" role="alert">{errors.Process.message}</p>}
          </Col>
        </Row>

        <hr/>
        <div className='btns'>
        <Button  className='btn1' type="submit" variant="secondary">Cancel</Button>
        <Button  className='btn2 d-flex align-items-center' type="submit" variant="info">
        <FaRegSave  className='me-2' />
          Save</Button>
        </div>
       

      </Form>


    </div>
  )
}

export default Activitytab
