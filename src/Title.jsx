import React from "react";


export default function Title() {
    const TitleStyles = {
        textAlign: 'center',
        fontSize: '18px',
        fontFamily: 'Rubik',
        width: "100%",
        marginBottom: "30px"
    }
    return (
        <h1 className="sch-title" style={TitleStyles}>
            Розклад занять 1-го курсу ІГ ГІС
        </h1>
    )
}