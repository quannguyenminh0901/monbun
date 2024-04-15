import React from "react";

export const metadata = {
    title: 'My Blogs',
    description: 'Blog in your Website'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}