import React, {useState} from 'react'
import Calender from "react-date-picker";


const Calendar = () => {
      const [date, setDate] = useState(new Date());
      const onChange = (date) => {
        setDate(date);
      };
  return (
    <div>
    <Calender onChange={onChange} value={date} />
    </div>
  );
}

export default Calendar
