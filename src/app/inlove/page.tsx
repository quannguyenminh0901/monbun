/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react';
import BackBtn from '@/components/Button/BtnBack';
import { Col, Row, Image } from 'react-bootstrap';

const InLove = () => {
    const [yourDate, setYourDate] = useState(new Date("2023-11-25T14:10:26"));
    const [days, setDays] = useState<number>(0);
    const [time, setTime] = useState<string>("00:00:00");

    const [boyName, setBoyName] = useState("Nguyễn Minh Quân")
    const [boyImage, setBoyImage] = useState("./assets/images/q1.jpg")
    const [girlName, setGirlName] = useState("Nguyễn Ngọc Ánh")
    const [girlImage, setGirlImage] = useState("./assets/images/mon1.jpg")

    const handleBoyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBoyName(event.target.value);
    }

    const handleGirlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGirlName(event.target.value);
    }

    const handleBoyImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Assuming you're uploading an image and storing its URL
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setBoyImage(reader.result as string);
        };
        if (file)
            reader.readAsDataURL(file);
    };

    const handleGirlImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Assuming you're uploading an image and storing its URL
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setGirlImage(reader.result as string);
        };
        if (file)
            reader.readAsDataURL(file);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            updateClock();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const daysDiff = Math.floor(Math.floor((new Date().getTime() - yourDate.getTime()) / 1000) / 60 / 60 / 24);
        setDays(daysDiff);
    }, [yourDate]);

    const updateClock = () => {
        const today = new Date();
        const hrs = (Math.floor(Math.floor((today.getTime() - yourDate.getTime()) / 1000) / 60 / 60)) % 24;
        const min = (Math.floor(Math.floor((today.getTime() - yourDate.getTime()) / 1000) / 60)) % 60;
        const sec = Math.floor((today.getTime() - yourDate.getTime()) / 1000) % 60;
        setTime(`${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`);
    };

    return (
        <div className=''>
            <BackBtn />
            <div>
                <div
                    className='text-center'>
                    <h3>LOVE DAYS</h3>
                    <p>Date: {
                        yourDate.getDate() > 9 ? yourDate.getDate() :
                            "0" + yourDate.getDate()}-{(yourDate.getMonth() + 1) > 9 ? (yourDate.getMonth() + 1) :
                                "0" + (yourDate.getMonth() + 1)}-{yourDate.getFullYear()}
                    </p>
                    <p className=''>
                        {days} DAYS
                    </p>
                    <p>
                        Time: <time>{time}</time>
                    </p>
                </div>
                <div>
                    <Row className='items-center m-auto'>
                        <Col className='m-auto'>
                            <label htmlFor="boy-image-upload">
                                {boyImage ? (
                                    <Image src={boyImage} roundedCircle alt="Boy" className='w-[15rem] h-[15rem] object-cover m-auto' />
                                ) : (
                                    <div
                                        className="
                                        flex h-60 rounded-full w-60 cursor-pointer items-center justify-center border-2 border-red-300">
                                        Click here to upload image
                                    </div>
                                )}
                            </label>
                            <input
                                type="text"
                                value={boyName}
                                onChange={handleBoyNameChange}
                            />
                            <input
                                id="boy-image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleBoyImageChange}
                                style={{ display: "none" }}
                            />
                        </Col>
                        <Col className='text-center text-2xl text-red-600'>❤</Col>
                        <Col className='m-auto'>
                            <label htmlFor="girl-image-upload">
                                {girlImage ? (
                                    <Image src={girlImage} roundedCircle alt="Girl" className='w-[15rem] h-[15rem] object-cover m-auto' />
                                ) : (
                                    <div
                                        className="
                                            flex h-60 rounded-full w-60 cursor-pointer items-center justify-center border-2 border-red-300">
                                        Click here to upload image
                                    </div>
                                )}
                            </label>
                            <input
                                type="text"
                                value={girlName}
                                onChange={handleGirlNameChange}
                            />
                            <input
                                id="girl-image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleGirlImageChange}
                                style={{ display: "none" }}
                            />
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default InLove;
