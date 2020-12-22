import axios from 'axios';

const getData = async (userID) =>{
    try
    {
        const {data:users} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);

        return {
            users,
            posts
        }
    }
    catch(err)
    {
        console.log(err.message);
    }
    
}

export default getData;