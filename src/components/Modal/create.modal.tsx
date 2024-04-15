import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import UploadImage from '../Button/BtnUploadImage';
import DatePickers from '../Button/BtnDate';

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (v: boolean) => void;
}
function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [imageURL, setImageURL] = useState<string>("")
    const [nameFile, setNameFile] = useState<string>("")
    const [date, setDate] = useState<string>("")

    const handleCloseModal = () => {
        setTitle("")
        setContent("")
        setAuthor("")
        setImageURL("")
        setNameFile("")
        setDate("")
        setShowModalCreate(false)
    }

    const handleSubmit = () => {

        if (!title) {
            toast.error("Not null Title !")
            return
        }
        if (!content) {
            toast.error("Not null Content !")
            return
        }
        if (!author) {
            toast.error("Not null Author !")
            return
        }
        if (!nameFile) {
            toast.error("Not null File name !")
            return
        }
        if (!date) {
            toast.error("Please select a Date")
            return
        }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/pain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content, imageURL, nameFile, date })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Create a successfull blog !")
                    handleCloseModal()
                    mutate("http://localhost:8000/blogs")
                }
            })
    }

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New A Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text" placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea" rows={3} placeholder='Content'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                placeholder='Author'
                                as="textarea" rows={1}
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <UploadImage setImageURL={setImageURL} />
                            <Form.Label>File Name</Form.Label>
                            <Form.Control
                                placeholder='nameFile'
                                as="textarea" rows={1}
                                value={nameFile}
                                onChange={(e) => setNameFile(e.target.value)}
                            />
                        </Form.Group>
                        <DatePickers date={date} setDate={setDate} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;