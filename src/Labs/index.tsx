import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
    return (
        <div>
            <h1>Sitong Zhang</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="lab1" element={<Lab1 />} />
                <Route path="lab2/*" element={<Lab2 />} />
                <Route path="lab3/*" element={<Lab3 />} />
            </Routes>
        </div>
    );
}