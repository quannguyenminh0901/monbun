import { useState } from "react";
import { Button } from "react-bootstrap";
import CreateModal from "../Modal/create.modal";

const AddNewBtn = () => {

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

    return (
        <div>
            <Button variant="outline-info" onClick={() => setShowModalCreate(true)}>Add New Posts</Button>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
        </div>
    )
}

export default AddNewBtn;