'use client'

import Carousels from "@/components/Carousels";
import Spinners from "@/components/Spinner/Spinner";
import StatusPost from "@/components/Status/status.post";
import useBlogData from "@/hook/useSWR"

const Blogs = () => {
    const { data, error, isLoading } = useBlogData();

    if (isLoading) {
        return <Spinners />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Carousels />
            <StatusPost data={data} />
        </div>
    );
}

export default Blogs;
