'use client'

import AddNewBtn from "@/components/Button/BtnAdd"
import Spinners from "@/components/Spinner/Spinner"
import AppTable from "@/components/Table/app.table"
import useBlogData from "@/hook/useSWR"

const Upload = () => {
    const { data, error, isLoading } = useBlogData()
    if (!data) {
        return <Spinners />
    }

    return (
        <div>
            <div className="my-3 flex justify-between">
                <h3>Table Blogs</h3>
                <AddNewBtn />
            </div>
            <AppTable data={data} />
        </div>
    )
}

export default Upload;