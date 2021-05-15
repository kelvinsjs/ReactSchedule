import React from "react";
import WeekdayStyles from "./WeekdatStyles";

export default function WeekdayTitle(props) {
    const {day} = props;
    return(
        <h3 className="weekday-name" style={WeekdayStyles.forName} key={day.id}>
            {day.weekday}
        </h3>
    )
}