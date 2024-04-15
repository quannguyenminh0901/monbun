import { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
    date: string;
    setDate: (v: string) => void;
}

const DatePickers = (props: IProps) => {
    const { date, setDate } = props;
    const [startDate, setStartDate] = useState<Date | null>(
        date ? new Date(date) : null
    );

    const handleDateChange = (selectedDate: Date | null) => {
        setStartDate(selectedDate);
        const dateString = selectedDate ? selectedDate.toISOString().slice(0, 10) : "";
        setDate(dateString);
    };

    return (
        <Form.Group className='my-2'>
            <Form.Label className='mr-2'>Selected Date</Form.Label>
            <DatePicker
                value={date}
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
            />
        </Form.Group>
    );
};

export default DatePickers;
