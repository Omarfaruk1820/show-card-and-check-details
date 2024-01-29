
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {

    const styleUser={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'10px'

    }

    const {id, name, email, phone}=user;
const navigate=useNavigate();

    const handleShowDetails=()=>{
navigate(`/user/${id}`);
    }

    
    
    return (
        <div style={styleUser} >
           <h2>Name:{name}</h2> 
           <p>email:{email}</p>
           <p>phone:{phone}</p>
           {/* <Link >Show Details</Link> */}
           <Link to={`/user/${id}`}><button>Click Me</button></Link>
           <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default User;