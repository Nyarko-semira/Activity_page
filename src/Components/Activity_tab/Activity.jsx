import React from 'react'
import "../../Components/Activity_tab/Activity.css"
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import Requirement_tab from './Requirement_tab'
import Activitytab from './Activitytab'

const Activity = () => {
  return (
    <div className='activity'>
      <h1>Create Activity</h1>
        <Tabs
      defaultActiveKey="profile"
       id="justify-tab-example"
      className="mb-3 titles "
      justify
    >
      <Tab eventKey="home" title="Activity Details"  >
       <Activitytab/>
      </Tab>
      <Tab eventKey="profile" title="Requirement" >
        <Requirement_tab/>
      </Tab>
      
    </Tabs>
   

    </div>
  
  
  )
}

export default Activity
