'use client'

import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

const BackBtn = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.back()
    }
    return (
        <div className="mt-1">
            <Button
                onClick={() => handleBtn()}
                variant="outline-danger"
            >
                {'<<'} Go Back
            </Button>
        </div>
    )
}

export default BackBtn;
