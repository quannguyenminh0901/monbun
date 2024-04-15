import React from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
    item: IBlogs,
    id: number
}

const Delete = (props: IProps) => {

    const { item, id } = props;
    const [showModal, setShowModal] = React.useState(false);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Delete blog succeed !");
                    mutate("http://localhost:8000/blogs");
                    setShowModal(false);
                }
            });
    }

    return (
        <>
            <Button variant="outline-danger" className="mx-1" onClick={() => setShowModal(true)}>Delete</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this blog {" "}
                    <span className="text-lg text-red-500">{item.id}</span> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Delete;
