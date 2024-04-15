import { Form } from 'react-bootstrap';

interface IProps {
    setImageURL: (url: string) => void;
}

const UploadImage = ({ setImageURL }: IProps) => {

    function handleImageChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageURL(reader.result as string);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
                type="file" multiple
                onChange={handleImageChange}
            />
        </Form.Group>
    );
};

export default UploadImage;
