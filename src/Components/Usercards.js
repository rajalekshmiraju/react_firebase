import React from "react"
import {Card, CardBody} from "reactstrap"
const Usercards = ({user})=>{
return(
    <Card className="text-center mt-3 mb-4">
        <img src={user.avatar_url} className="img-thumbnail" />
        <CardBody>
            <div className="text-primary">{user.name}</div>
            <div className="text-primary">{user.location}</div>
            <div className="text-primary">{user.bio}</div>
            <div className="text-primary">available for hire{user.hirable ? 'yes' : 'nop'}</div>
            <div className="text-primary"> followers{user.followers }</div>
        </CardBody>
    </Card>
)
}
export default Usercards;