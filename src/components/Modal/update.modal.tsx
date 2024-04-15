import { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import UploadImage from '../Button/BtnUploadImage';
import DatePickers from '../Button/BtnDate';

interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (v: boolean) => void;
    blog: IBlogs | null
    setBlog: (value: IBlogs | null) => void
}

function UpdateModal(props: IProps) {
    const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [imageURL, setImageURL] = useState<string>("")
    const [nameFile, setNameFile] = useState<string>("")
    const [date, setDate] = useState<string>("")

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
            setImageURL(blog.imageURL)
            setNameFile(blog.nameFile)
            setDate(blog.date)
        }
    }, [blog])
    const handleCloseModal = () => {
        setTitle("")
        setContent("")
        setAuthor("")
        setImageURL("")
        setNameFile("")
        setDate("")
        setBlog(null)
        setShowModalUpdate(false);
    }

    const handleSubmit = () => {
        if (!title || !content || !author || !nameFile || !imageURL || !date) {
            toast.error("Please fill in all fields!");
            return;
        }

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/pain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content, imageURL, nameFile, date })
        }).then(res => {
            if (res) {
                toast.warning("Update blog succeed!");
                handleCloseModal();
                mutate("http://localhost:8000/blogs");
            } else {
                throw new Error('Failed to update blog!');
            }
        }).catch(error => {
            console.error('Error:', error);
            toast.error('Failed to update blog!');
        });
    }

    return (
        <>
            <Modal
                show={showModalUpdate}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Blog</Modal.Title>
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
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text" placeholder='Author'
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
                    <Button variant="warning" onClick={() => handleSubmit()}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;
