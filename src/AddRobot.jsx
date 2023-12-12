import { useState } from "react"
const AddRobot = ({ handleAddRobot, ChangeAddButton }) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()

    function AddRobotInput(e) {
        e.preventDefault()
        let data = {
            first: firstName,
            last: lastName,
            email: email
        }
        handleAddRobot(data)
        ChangeAddButton()

    }
    return (
        <>
            <form className="addrobot" onSubmit={AddRobotInput}>
                <input type="text" placeholder="first name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <input type="text" placeholder="last name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <input type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <button type="submit">add</button>
            </form>
        </>
    )
}
export default AddRobot