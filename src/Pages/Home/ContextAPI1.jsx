import React , { useContext } from "react";
import { PostContext } from "./Dashboard";

export default function ContextAPITable(){

    const { postData, setPostData } = useContext(PostContext);

    console.log(postData, 'post')
    

    const cutString = (str) =>{
        return str.length > 30 ? str.slice(0, 30) + '...' : str;
    }
    return(
        
        
        <div className={styles.tableContainer}>
        <h2 style={{textAlign:"center "}}>Data from API</h2>
        <table border="1" >
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>

                { postData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{cutString(item.title)}</td>
                        <td>{cutString(item.body)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    )
};
const styles = {

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