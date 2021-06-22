
import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import Usercards from "../Components/Usercards";
import Repose from "../Components/Repose";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = ()=>{
const Context = useContext(UserContext)
const [query, setQuery]= useState('')
const [user, setUser]= useState(null)

const fetchDetials = async ()=>{
    try{
const {data} = await Axios.get(`https://api.github.com/users/${query} `)
setUser(data)
console.log({data});
    }catch(error){
        toast("not able to coonect" , {type: "error"})

    }
}



return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetials} color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <Usercards user={user}/>: null}
        </Col>
        <Col md="7">{user ? <Repose repos_url={user.repos_url}/>: null}</Col>
      </Row>
    </Container>
  );
};
export default Home;