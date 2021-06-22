import React , {useState , useEffect} from "react";
import Axios from "axios"
import{ListGroup,ListGroupItem} from "reactstrap";

const Repose = ({repos_url}) =>{
    const [repos, setRepose]= useState([])
    const fetchRepose = async () =>{
        const {data}= await Axios.get(repos_url)
        setRepose(data)
    }
    useEffect (() =>{
        fetchRepose()
    },[repos_url])
    return(
        <ListGroup>
            {repos.map ( repo =>(
                <ListGroupItem key ={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-primary">{repo.language}</div>
                    <div className="text-primary">{repo.description}</div>
                </ListGroupItem>
            )  )}
        </ListGroup>
    );
};
export default Repose ;