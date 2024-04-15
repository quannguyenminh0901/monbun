import React from "react";

export const metadata = {
    title: 'Upload Blog',
    description: 'MonDore - Khong biet khoc chi, biet lay anh ve lam chong',
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