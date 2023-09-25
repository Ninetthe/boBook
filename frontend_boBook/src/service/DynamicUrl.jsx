// import {useFetch} from "./useFetch";

// export default function DynamicUrl() {
    
//     const [data] = useFetch("http://127.0.0.1:8000/api/users")


//         return (
//             <div>
//                 <h1>LISTADO GENERAL DE USUARIOS</h1>
//                 <ul>
//                     {data?.map((user) => (<li key={user_id}>{user.name}</li>))}
//                 </ul>
//             </div>
//                     )
// }



export default function DynamicUrl(endpoint) {
    const baseUrl = "http://127.0.0.1:8000/";
  
    // Concatena el endpoint a la URL base
    const url = baseUrl + endpoint;
  
    return url;
  }
  