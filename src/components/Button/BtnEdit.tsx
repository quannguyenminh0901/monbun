import { Button } from "react-bootstrap"
import UpdateModal from "../Modal/update.modal";
import { useState } from "react";

interface IProps {
    item: IBlogs
}
const Edit = (props: IProps) => {
    const { item } = props
    const [blog, setBlog] = useState<IBlogs | null>(item)
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)

    return (
        <div>
            <Button variant="outline-warning" className="mx-1"
                onClick={() => {
                    setBlog(item)
                    setShowModalUpdate(true)
                }}
            >
                Edit
            </Button>
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            />
        </div>
    )
}

export default Edit;