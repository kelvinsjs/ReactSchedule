import React from "react";
import WeekdayTitle from "./WeekdayTitle";
import LessonBlock from "./LessonBlock";

export default class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isFetching: true, error: null};
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kelvinsjs/lessons-database/main/db.json')
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false}));
    }

    render() {
        const {data, isFetching} = this.state;
        const myDate = new Date();
        const weekNumber = myDate.getWeekYear;
        let typeOfWeek = weekNumber % 2 === 0 ? "even" : "odd";
        console.log(typeOfWeek);
        if (isFetching) return <div>...Loading</div>;
        const MondayLessons = [];
        for (let k = 0; k < data.length; k++) {
            MondayLessons.push(<WeekdayTitle day={data[k]}/>)
            for (let i = 0; i < data[k].lessons.length; i++) {
                if (data[k].lessons[i].aval === "always" || data[k].lessons[i].aval === typeOfWeek) {
                    MondayLessons.push(<LessonBlock filler={data[k].lessons[i]} key={data[k].lessons[i].id}/>)
                } else {
                    continue;
                }
            }
        }

        return (
            <main className="sch-main">
                {MondayLessons}
            </main>
        );
    }


}