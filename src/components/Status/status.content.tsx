/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Row, Col, Image, Figure } from "react-bootstrap"

interface IProps {
    b: IBlogs[]
}

const StatusContent = (props: IProps) => {
    const { b } = props

    return (
        <div className="flex flex-col">
            {b?.map(item => {
                return (
                    <div key={item.id} className="p-2 mb-2 w-[50rem] w-max-full mx-auto overflow-auto border-2 bg-white rounded-xl">
                        <div className="flex justify-between py-6 px-4">
                            <div>ID: {item.id}</div>
                            <div>{item.author}</div>
                        </div>
                        <Figure className="w-full">
                            <div className="mx-auto px-4 py-2">
                                <div>{item.content}</div>
                            </div>
                            <div className="w-full flex items-center justify-center border-y-2">
                                <Image
                                    className="w-[30rem] max-w-full h-96 max-h-full object-cover"
                                    src={item.imageURL} alt="" />
                            </div>
                        </Figure>
                    </div>
                )
            })}
        </div>

    )
}

export default StatusContent