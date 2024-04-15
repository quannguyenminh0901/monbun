import Link from "next/link";
import { Button } from "react-bootstrap"

interface IProps {
    item: IBlogs
}

const View = (props: IProps) => {

    const { item } = props
    return (
        <Link
            className="btn btn-outline-primary"
            href={`/blogs/${item.id}`}
        >
            View
        </Link>
    )
}

export default View;