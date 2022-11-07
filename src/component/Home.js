import React from "react";
import { BsKeyFill } from 'react-icons/Bs';
import { HiUsers } from 'react-icons/Hi';
import { MdLibraryBooks } from 'react-icons/Md';

export default function (ButtonGetToken){
    return(
        <>
        <Button variant="contained"> <BsKeyFill></BsKeyFill> Access Token</Button>
        <Button variant="contained"> <HiUsers></HiUsers> Users</Button>
        <Button variant="contained"> <MdLibraryBooks></MdLibraryBooks> Books</Button>
        </>
    )
}