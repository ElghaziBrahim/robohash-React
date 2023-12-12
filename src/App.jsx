import { useState } from 'react'
import Card from './Card'
import Search from './Search'
import robots from './db'
import AddRobot from './AddRobot'

import './App.css'

function App() {
  const [robotsData, setRobotsData] = useState(robots)
  const [isAdd, setIsAdd] = useState(false)


  function ChangeAddButton() {
    setIsAdd(!isAdd)
  }
  const handleSearchApp = (val) => {
    if (val == "") {
      var newData = robots
    } else {
      var newData = robotsData.filter((robot) => {
        return (
          robot.firstName.includes(val) ||
          robot.lastName.includes(val) ||
          robot.email.includes(val)
        )
      })
    }

    setRobotsData(newData)

  }
  function addRobot(data) {
    const maxId = robotsData.reduce((max, robot) => (robot.id > max ? robot.id : max), 0);
    const newRobot = {
      id: maxId,
      firstName: data.first,
      lastName: data.last,
      email: data.email,
      avatar: `https://robohash.org/${data.first}`
    }
    const newdata = [...robotsData, newRobot]
    setRobotsData(newdata)

  }

  return (
    <>

      <div className='main'>
        <Search handleSearchApp={handleSearchApp} />
        {isAdd ? <AddRobot handleAddRobot={addRobot} ChangeAddButton={ChangeAddButton} /> : <button className='addbutton' onClick={ChangeAddButton}> Add User</button>}
        <div className='robotsData'>
          {
            robotsData.map((r) => (
              <Card data={r} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
