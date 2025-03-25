import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../style/print.scss'
import { Button } from "primereact/button";

export const Print = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const char = queryParams.get('char'); // Get the 'char' query parameter
    let fromNumber = parseInt(queryParams.get('from-number') ?? '0'); // Get the 'number' query parameter
    let toNumber = parseInt(queryParams.get('to-number') ?? '0'); // Get the 'number' query parameter

    const rows = Math.round((toNumber - fromNumber) / 6); // Number of rows
    const columns = 6; // Number of columns
    const hebrewMonths = [
        "ינואר",  // January
        "פברואר", // February
        "מרץ",    // March
        "אפריל",  // April
        "מאי",    // May
        "יוני",   // June
        "יולי",   // July
        "אוגוסט", // August
        "ספטמבר", // September
        "אוקטובר",// October
        "נובמבר", // November
        "דצמבר"  // December
      ];
    const todayDate = new Date(Date.now());
    const month = todayDate.getMonth();
    const dateDisplayed = hebrewMonths[month]

    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    // Render the cards dynamically
    const cards = Array.from({ length: rows * columns }, () => (
        <div key={fromNumber} className="sticker">
            <div className='number'>{fromNumber++}</div>
            <div className='char-and-date'>
                <div>{dateDisplayed}</div>
                <div>{char}</div>
            </div>
        </div>
    ));

    return (<>
        <div className='btns-wrap'><Button onClick={() => reactToPrintFn()}>הדפסה</Button>
            <Button onClick={() => navigate('/')}>חזרה לעמוד הראשי</Button>
        </div>
        <div className="print grid-container" ref={contentRef}>
            {cards}
        </div>
    </>
    );
};
