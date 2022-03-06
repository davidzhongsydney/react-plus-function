import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Member from '../components/Member';

type Param = {
    name: string;
};

const CredentialView = () => {
    useEffect(() => {


        fetch(`/api/httpfunctiontest?name=ddd`)
            .then(response => response.json())
            .then(data => console.log(data));
      }, []);

    let {name} = useParams<Param>();

    console.log(name)

    return (
        <div>
            {
                name === "Tom"?
                <Member imageURL={"/profiles/" + name + ".jpeg"} 
                firstName={name} 
                lastName="West1"
                DOB="12/04/2000"
                address="3650 21st St, San Francisco, United States"
                verify = "/verified.png" /> : 
                <Member imageURL={"/profiles/Jerry.jpeg"} 
                firstName={name} 
                lastName="West"
                DOB="12/04/2000"
                verify = "/unverified.png" />
            }
        </div>
    )
};

export default CredentialView;