import React from "react";
import WeekdayStyles from "./WeekdatStyles";

export default function LessonBlock(props) {
    const {filler} = props;
    let rand=(min, max)=>Math.floor(Math.random() * max) + min;
    const Colors = "#8cdafe #8cdafe #bef2cc #fdda9a #fedb9b #abfdf1 #00ad99 #fff0ab #fea7b0".split("\n").join(" ").split(" ");
    let styleForLesson = {
        backgroundColor: Colors[rand(1,8)]
    };
    return (
        <div className="weekday-lesson" style={WeekdayStyles.forLessonBlock}>
            <p className="left-side" style={WeekdayStyles.forLeftSide}>
               <span className="lesson-start">
                  {filler.startTime}
               </span>
                <span className="lesson-end">
                    {filler.endTime}
                </span>
            </p>
            <p className="right-side" style={{...WeekdayStyles.forRightSide, ...styleForLesson}}>
                {filler.name}
            </p>
        </div>
    )
}

//