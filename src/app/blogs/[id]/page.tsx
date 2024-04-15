'use client'
import BackBtn from "@/components/Button/BtnBack";
import Spinners from "@/components/Spinner/Spinner";
import { Image, Card } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlogs = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlogs, string> = (url: string) => fetch(url)
        .then((res) => res.json())

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    console.log(data)
    if (isLoading)
        return <Spinners />

    return (
        <div className="my-2">
            <div className="flex items-center justify-between">
                <BackBtn />
                <h1>Blogs {data?.id}</h1>
            </div>
            <div className="mx-auto w-[50rem] w-max-full bg-white p-4 rounded-xl">
                <div className="text-center rounded-lg border-2 py-1 text-xl">{data?.title}</div>
                <div className="mx-auto">
                    <div className="py-4 px-2">{data?.content}</div>
                    <a
                        className="bg-neutral-400"
                        target="_blank" href={data?.imageURL} rel="noopener noreferrer">
                        <Image src={data?.imageURL} alt=""
                            className="h-[30rem] max-h-full mx-auto cursor-pointer"
                        />
                    </a>
                </div>
                <div className="flex justify-between my-1">
                    <div className="my-3">{data?.date}</div>
                    <div
                        className="border-2 rounded-lg w-28 my-2 px-1 py-2 
                            border-pink-300 text-pink-300 cursor-pointer
                            flex items-center justify-center"
                    >
                        {data?.author}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailBlogs;
