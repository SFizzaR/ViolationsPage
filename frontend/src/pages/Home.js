import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Violations from "./violations";
import { useState } from "react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState("Violations")


    const renderPage = () => {
        switch (currentPage) {
            case "Violations":
                return <Violations />;

            default:
                return; // fallback
        }
    };


    return (
        <>
            <Header CurrentPage={currentPage} />
            <Navbar onPageChange={setCurrentPage} />
            {renderPage()}
        </>
    )
}