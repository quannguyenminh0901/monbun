'use client'

import Delete from "../Button/BtnDel";
import Edit from "../Button/BtnEdit";
import View from "../Button/BtnView";

interface IProps {
    blogs: IBlogs[]
}

const BodyTable = (props: IProps) => {
    const { blogs } = props
    return (
        <tbody>
            {blogs?.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.date}</td>
                        <td className="flex items-center justify-center">
                            <View item={item} />
                            <Edit item={item} />
                            <Delete item={item} id={item.id} />
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default BodyTable;