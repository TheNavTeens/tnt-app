import React from 'react';

class TNTCalendar extends React.Component {
    componentDidMount () {
        window.location.href = "https://calendar.google.com/calendar/embed?src=l9kdcd1fccejrbtt8cms1kpkk4%40group.calendar.google.com&ctz=Asia%2FSingapore";
    }

    render () {
        return (
            <div></div>
        )
    }
}

export default TNTCalendar;