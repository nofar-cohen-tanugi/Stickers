import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import '../style/menu.scss';

const option = ["'ג", "'ר", "'ח"];

export const Menu = () => {
    const [selectedChar, setSelectedChar] = useState<string>();
    const [selectedFromNumber, setSelectedFromNumber] = useState<number | null>();
    const [selectedToNumber, setSelectedToNumber] = useState<number | null>();
    const [disabledBtn, setDisabledBtn] = useState<boolean>();

    const navigate = useNavigate();


    useEffect(() => {
        console.log(selectedFromNumber, selectedToNumber);
        
        if (selectedChar && !!selectedFromNumber && !!selectedToNumber && selectedFromNumber <= selectedToNumber) {
            setDisabledBtn(false);
        } else {
            setDisabledBtn(true);
        }
    }, [selectedChar, selectedFromNumber, selectedToNumber]);

    const footer = (
        <>
            <Button label="שמירה" icon="pi pi-check" disabled={disabledBtn} iconPos="right"
                className="save-btn" 
                onClick={() => navigate(`/print?char=${selectedChar}&from-number=${selectedFromNumber}&to-number=${selectedToNumber}`)
                } />
        </>
    );

    return <div className="menu-wrap">
        <h1>הדפסת מדבקות</h1>
        <Card title="הגדרות" footer={footer}>
            <Dropdown value={selectedChar} onChange={(e) => setSelectedChar(e.value)} options={option}
                placeholder="בחירת אות" className="select-char-dd" />
            <InputNumber placeholder="ממספר" value={selectedFromNumber} onValueChange={(e) => setSelectedFromNumber(e.value)} className="select-number" />
            <InputNumber placeholder="עד מספר" value={selectedToNumber} onValueChange={(e) => setSelectedToNumber(e.value)} className="select-number" />
        </Card>
    </div>
}