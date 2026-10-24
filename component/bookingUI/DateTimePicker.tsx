import BookingCard from "../UI/BookingCard";
import Calendar from "../UI/Calendar";
import TimeSlots from "../UI/TimeSlot";

const DateTimePicker = ({ date,
        time,
        onDateChange,
        onTimeChange}:{
            date: Date | null ;
            time: string;
            onDateChange: (d: Date) => void;
            onTimeChange: (t: string)=> void;
        }) => {

  return (
    <BookingCard title="Date & Time">
        <div className="grid gap-6 sm:grid-cols-[1fr_200px]">
        <Calendar selected={date} onSelect={onDateChange}/>
        <TimeSlots value={time} onChange={onTimeChange}/>
        </div>
    </BookingCard>
  );
};

export default DateTimePicker;