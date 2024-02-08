/* eslint-disable react/prop-types */
import React from "react";


const UserConextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)
    return(
        <UserConextProvider value={{user, setUser}}>
        {children}
        </UserConextProvider>
    )
}

export default UserConextProvider