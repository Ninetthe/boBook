import { useEffect, useState } from "react";


export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data)=> setData(data))
        .catch((error) => setError(error));
    }, []);


    return {data, error};
}


// export default function useFetch(url, options = {}) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);

//         if (!response.ok) {
//           throw new Error("Error en la solicitud");
//         }

//         const responseData = await response.json();
//         setData(responseData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       }
//     };

//     fetchData();
//   }, [url, options]);

//   return { data, error };
// }



