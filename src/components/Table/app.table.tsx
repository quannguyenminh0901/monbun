'use client'

import { Table } from "react-bootstrap"
import BodyTable from "./body.table"

const AppTable = ({ data }: { data: any }) => {
    return (
        <>
            <Table bordered hover size="sm" className="border-none">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <BodyTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
            </Table>
        </>
    )
}

export default AppTable;