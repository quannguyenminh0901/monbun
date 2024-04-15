// useBlogData.ts
import useSWR from "swr";

const useBlogData = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    return { data, error, isLoading };
}

export default useBlogData;
