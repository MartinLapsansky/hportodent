import React from 'react';
import Calendar, {type CalendarProps} from "react-calendar";
import '../styles/CalendarSection.css'
import '../styles/CustomCalendar.css';

const AVAILABLE_HOURS = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

type CalendarSectionProps = {
    selectedDate: Date | null,
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>,
    selectedTime: string | null,
    setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>
}

const CalendarSection: React.FC<CalendarSectionProps> = ({selectedTime,setSelectedDate,setSelectedTime,selectedDate}) => {
    const today = new Date();

    const handleDateChange: CalendarProps['onChange'] = (value) => {
        if (value instanceof Date) {
            setSelectedDate(value);
        }
        else if (Array.isArray(value)) {
            setSelectedDate(value[0]);
        }
    }

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const isDisabled = (date: Date) => {
        const day = date.getDay();
        const isWeekend = day === 0 || day === 6;
        const isBeforeToday = date < startOfToday;
        return isWeekend || isBeforeToday;
    };


  return (
      <div className="dentist-calendar-section">
        {/* Left Side - Calendar */}
        <div className="calendar-left">
          <h2>Vyberte dátum návštevy</h2>
          <div className="calendar-wrapper">
            <Calendar
                onChange={handleDateChange}
                locale='sk-SK'
                minDate={today}
                tileDisabled={({ date }) => isDisabled(date)}
                tileClassName={({ date }) => {
                    return isDisabled(date) ? 'custom-disabled' : '';
                }}
            />
          </div>
        </div>

        {/* Right Side - Available Termins */}
        <div className="termins-right">
            {
                selectedDate ? (
                    <>
                        <h3>Dostupne terminy pre {selectedDate.toLocaleDateString('sk-SK')}</h3>
                        <div className='hours-grid'>
                            {
                                AVAILABLE_HOURS.map((hour) => (
                                    <div className={`hour-slot ${selectedTime === hour ? 'selected' : '' }`} onClick={()=> setSelectedTime(hour)}
                                         key={hour}>
                                        {hour}
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <p>Vyberte si datum pre zobrazenie terminov.</p>
                )
            }
        </div>
      </div>
  );
};

export default CalendarSection;