import React, { useState, useEffect,createContext, useContext} from "react";
// import Table from "./Table.jsx";
import ContextAPITable from "./ContextAPI1";

export const PostContext = createContext();

export default function ApiData(){

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetchData()
    },[])
    // console.log(datas);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setPostData(result);
    }

    return(
        <div style={styles.container}>


          <PostContext.Provider value = {{postData, setPostData}}>
            <ContextAPITable />
          </PostContext.Provider>
         
            {/* <h1>data from API</h1>
            <Table data={datas} /> */}

                {/* {datas.map((data) => {
                    return(
                        <div style={{ textAlign: 'left' }}>
                       
                        <li  key={data.id}>{data.title}{data.id}</li> 
                         {/* <li  key={data.id}>{data.userId}</li> */}
                        {/* </ div> */}
                    
                {/* // })} */} 
           
        </div>
    )

}
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centers content horizontally
      padding: '20px',
    },
    tableContainer: {
      display: 'flex',
      justifyContent: 'center', // Centers the table horizontally
      width: '100%',
      overflowY: 'auto',
      padding: '10px',
      border: '1px solid #ccc',
      maxHeight: '600px',
    },
  };