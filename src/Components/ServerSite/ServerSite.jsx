import React, { useEffect, useState } from 'react';
import ServerSiteDetails from '../ServerSiteDetails/ServerSiteDetails';

const ServerSite = () => {
    const [serberSite, setServerSite] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:3000/chef/')
            .then(res => res.json())
            .then(data => setServerSite(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div className='grid container grid-cols-1 md:grid-cols-3'>
            {
                serberSite.map(server => <ServerSiteDetails
                key={server.id}
                server={server}
                ></ServerSiteDetails>)
            }
        </div>
    );
};

export default ServerSite;