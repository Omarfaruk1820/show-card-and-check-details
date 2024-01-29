
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId}=useParams();
    const user=useLoaderData();
    const navigate=useNavigate();
    const {name,website}=user;
    //console.log(userId)


    const handleGoBack=()=>{
navigate(-1);
    }
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h2>Website:{website}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;