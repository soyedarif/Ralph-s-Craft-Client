import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxios";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";

const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure()
    const {data: users=[],refetch}=useQuery(['users'], async()=>{
        const res=await axiosSecure.get('/users')
        return res.data
    })
    return (
        <div>
            <h2 className="text-5xl font-medium text-center">Manage All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Role</th>
        <th>Make Instructor</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,i)=>(
        
         <tr key={user._id}>
         <th>
          {i+1}
         </th>
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{user.name}</div>
             </div>
           </div>
         </td>
         <td className="uppercase">
          {user.role}
        
         </td>
         <td>
         <button className="btn bg-yellow-400 text-2xl"><FaUserGraduate/></button>
         </td>
         <th>
          <button className="btn bg-red-500 text-white text-2xl"><FaUserSecret/></button>
         </th>
       </tr>
      )
      
      )}
     
   </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;