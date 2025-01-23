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
    const [selectedNumber, setSelectedNumber] = useState<number | null>();
    const [disabledBtn, setDisabledBtn] = useState<boolean>();

    const navigate = useNavigate();


    useEffect(() => {
        if (selectedChar && selectedNumber && selectedNumber > 0) {
            setDisabledBtn(false);
        } else {
            setDisabledBtn(true);
        }
    }, [selectedChar, selectedNumber]);

    const footer = (
        <>
            <Button label="שמירה" icon="pi pi-check" disabled={disabledBtn} iconPos="right"
                className="save-btn" 
                onClick={() => navigate(`/print?char=${selectedChar}&number=${selectedNumber} `)
                } />
        </>
    );

    return <div className="menu-wrap">
        <Card title="הגדרות" footer={footer}>
            <Dropdown value={selectedChar} onChange={(e) => setSelectedChar(e.value)} options={option}
                placeholder="בחירת אות" className="select-char-dd" />
            <InputNumber placeholder="בחירת מספר" value={selectedNumber} onValueChange={(e) => setSelectedNumber(e.value)} className="select-number" />
        </Card>
    </div>
}