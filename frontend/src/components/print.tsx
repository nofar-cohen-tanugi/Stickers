import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../style/print.scss'
import { Button } from "primereact/button";

export const Print = () => {
    const rows = 12; // Number of rows
    const columns = 6; // Number of columns
    const todayDate = new Date(Date.now());
    const month = todayDate.getMonth() + 1;
    const year = todayDate.getFullYear();
    const dateDisplayed = `${month < 10 ? '0' + month : month}/${year}`;

    const location = useLocation();
    const navigate = useNavigate();

    // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const char = queryParams.get('char'); // Get the 'char' query parameter
    let number = parseInt(queryParams.get('number') ?? '0'); // Get the 'number' query parameter

    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    // Render the cards dynamically
    const cards = Array.from({ length: rows * columns }, () => (
        <div key={number} className="sticker">
            <div className='number'>{number++}</div>
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
