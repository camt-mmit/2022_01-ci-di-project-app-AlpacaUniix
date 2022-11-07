import React from "react";
import { ButtonGroup, Button, InputGroup, Form } from 'react-bootstrap';
import { BsFillKeyFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { MdLibraryBooks } from 'react-icons/md';

export default function Home() {
    return (
        <>
            <div className="d-flex justify-content-center" style={{ marginTop: 25 }}>
                <ButtonGroup className="mb-7">
                    <Button> <BsFillKeyFill /> Access Token</Button>
                    <Button> <HiUsers /> Users</Button>
                    <Button> <MdLibraryBooks /> Books</Button>
                </ButtonGroup>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: 25}}>
                <InputGroup className="mb-3" style={{ width: "20%" }}>
                    <InputGroup.Text><BsFillKeyFill /></InputGroup.Text>
                    <Form.Control
                        id="inlineFormInputGroup"
                        placeholder="Access Token"
                        aria-label="Token"
                    />
                </InputGroup>
            </div>
        </>
    )
}