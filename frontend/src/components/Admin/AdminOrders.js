import React from 'react'
const data = [
   
   
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "deliverd" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "deliverd" },
    { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },

    
    
    
]
const AdminOrders = () => {
  return (
    <div className='flexCenter'>


        <table>
                <tr>
                    <th>Items</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key} style={key % 2 === 0 ? { backgroundColor: '#dddfdd' } : {}}>
                            <td>{val.item}</td>

                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.status}</td>
                        </tr>
                    )
                })}

        </table>
    </div>
  )
}

export default AdminOrders