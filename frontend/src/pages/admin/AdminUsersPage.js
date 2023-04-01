import UsersPageComponent from "./components/UsersPageComponent"
import axios from "axios"

const fetchUsers = async(abcctrl) =>{
    const {data} = await axios.get("/api/users", {
      signal : abcctrl.signal
    });
    return data
}

const deleteUser = async(userId) =>{
    const {data} = await axios.delete(`/api/users/${userId}`)
    return data
}
// fetchUsers()
function AdminUsersPage() {
  return (
    <UsersPageComponent fetchUsers={fetchUsers} deleteUser = {deleteUser}/>
  )
}

export default AdminUsersPage