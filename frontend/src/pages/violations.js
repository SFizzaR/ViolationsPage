import React from "react";
import { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './pings.css'
import { Table } from "react-bootstrap";
import { violations, sampleData } from "../data/data";
import Pagination from 'react-bootstrap/Pagination';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import axios from 'axios';

export default function Violations() {
    const [selectedViolation, setSelectedViolation] = useState(null);
    const [daterange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = daterange;
    const [searchTerm, setsearchTerm] = useState("")
    const [filterData, setfilterData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filterData.slice(indexOfFirstRecord, indexOfLastRecord);
    const TotalPages = Math.ceil(filterData.length / recordsPerPage);
    const dates = sampleData.map(d => new Date(d.dateTime));
    const minDate = new Date(Math.min(...dates));

    const getViolationName = (num) => {
        if (!num) return "Violation Type";
        const match = violations.find(v => v.event === num);
        return match ? match.name : "Violation Type";
    }

    const fetchfiltered = async () => {
        const baseurl = `http://localhost:3000/violations/filter`;
        let params = []
        try {
            if (startDate) params.push(`startDate=${encodeURIComponent(startDate.toISOString())}`)
            if (endDate) params.push(`endDate=${encodeURIComponent(endDate.toISOString())}`)
            if (selectedViolation) params.push(`violationNum=${encodeURIComponent(selectedViolation)}`)
            if (searchTerm) params.push(`vehicleNum=${encodeURIComponent(searchTerm)}`)

            const finalurl = `${baseurl}?${params.join('&')}`
            console.log(finalurl)

            const response = await axios.get(
                finalurl
            )
            setfilterData(response.data)
        }

        catch (error) {
            console.error("Failed fetching data", error)
        }

    }

    useEffect(() => {
        fetchfiltered();
    }, [startDate, endDate, selectedViolation, searchTerm]);


    return (
        <>

            <div
                style={{
                    marginLeft: '17vw',
                    marginBottom: '1vw',
                    marginTop: '2vw',
                    marginRight: '2vw',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px'
                }}>
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '400px',
                        flexGrow: 1
                    }}>
                    <i
                        className="fas fa-search"
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'black'
                        }} />
                    <input
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setsearchTerm(e.target.value)}
                        style={{
                            padding: '5px 10px 5px 30px',
                            backgroundColor: "#DCD6D0",
                            borderRadius: '20px',
                            borderStyle: 'none',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        width: "100%",
                        gap: "10px"

                    }}>
                    <Dropdown
                        show={dropdownOpen}
                        onToggle={(isOpen) => setDropdownOpen(isOpen)
                        }
                        style={{
                            paddingRight: "15px",
                            position: 'relative',
                        }}>
                        {selectedViolation !== null && (
                            <button
                                onClick={() => { setSelectedViolation(null); setDropdownOpen(false); }}
                                style={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "10px",
                                    border: "none",
                                    background: "transparent",
                                    fontSize: "16px",
                                    color: "#dc3545",
                                    cursor: "pointer",
                                    zIndex: 10,
                                    marginRight: "4px"
                                }}
                                aria-label="Clear Section"
                            >X</button>)}
                        <Dropdown.Toggle
                            variant="light"
                            id="dropdown-basic">
                            {getViolationName(selectedViolation)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                    setSelectedViolation(1);
                                    setDropdownOpen(false);
                                }}>
                                Harsh Braking
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setSelectedViolation(2);
                                    setDropdownOpen(false);
                                }}>
                                Overspeeding
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setSelectedViolation(3);
                                    setDropdownOpen(false);
                                }}>
                                Multiple Violations
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setSelectedViolation(4);
                                    setDropdownOpen(false);
                                }}>
                                Nighttime Driving
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setSelectedViolation(5);
                                    setDropdownOpen(false);
                                }}>
                                Continuous Violations
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div
                        style={{
                            position: "relative",
                            width: "fit-content"
                        }}>
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            dateFormat="P"
                            placeholderText="Start & End Date"
                            className="form-control custom-datepicker"
                            isClearable
                            maxDate={new Date()}
                            minDate={minDate}
                        />
                        <CalendarTodayRoundedIcon
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#666",
                                pointerEvents: "none",
                            }}
                        />
                    </div>

                </div>
            </div >
            <div
                style={{
                    marginLeft: '17vw',
                    marginRight: '2vw',
                }}>
                <Table
                    responsive
                    striped
                    bordered
                    hover
                    style={{
                        fontSize: '13px'
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    backgroundColor: '#ADD8E6',
                                }}>
                                Vehicle Number
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#ADD8E6',
                                }}>
                                Violation Type
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#ADD8E6',
                                }}>
                                Date & Time
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#ADD8E6',
                                }}>
                                Latitude
                            </th>
                            <th
                                style={{
                                    backgroundColor: '#ADD8E6',
                                }}>
                                Longitude
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="5"
                                    style={{
                                        textAlign: "center",
                                        color: "#DCD6D0"
                                    }}>
                                    No data for selected criteria
                                </td>
                            </tr>
                        ) : (
                            currentRecords.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.vehicleNum}</td>
                                    <td>{data.violationType}</td>
                                    <td>{new Date(data.dateTime).toLocaleString()}</td>
                                    <td>{data.latitude}</td>
                                    <td>{data.longitude}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'nowrap'
                    }}>
                    <Pagination
                        size="sm"
                        className="custom-pagination"
                        style={{
                            marginTop: '12px',
                            fontSize: '12px'
                        }}>
                        <Pagination.First
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}>
                            <SkipPreviousIcon />
                        </Pagination.First>
                        <Pagination.Prev
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}>
                            <ArrowLeftIcon />
                        </Pagination.Prev>
                        {[...Array(TotalPages).keys()].map((num) => (
                            <Pagination.Item
                                key={num + 1}
                                active={num + 1 === currentPage}
                                onClick={() => setCurrentPage(num + 1)}>
                                {num + 1}
                            </Pagination.Item>
                        ))}

                        <Pagination.Next
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, TotalPages))}
                            disabled={currentPage === TotalPages}>
                            <ArrowRightIcon />
                        </Pagination.Next>
                        <Pagination.Last
                            onClick={() => setCurrentPage(TotalPages)}
                            disabled={currentPage === TotalPages}>
                            <SkipNextIcon />
                        </Pagination.Last>
                    </Pagination>
                    <div
                        style={{
                            width: '100%',

                        }}>
                        <select
                            value={recordsPerPage}
                            onChange={(e) => {
                                setRecordsPerPage(parseInt(e.target.value));
                                setCurrentPage(1);
                            }}
                            style={{
                                borderRadius: "2px",
                                padding: "2px 5px",
                                backgroundColor: "rgb(202, 200, 200)",
                                fontSize: '14px'
                            }}>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='12'>12</option>
                            <option value='15'>15</option>
                        </select>
                        <label
                            style={{
                                margin: '8px',
                                fontSize: '13px'
                            }}>
                            Items per page
                        </label>
                    </div>
                    <div
                        style={{
                            justifyContent: 'flex-end',
                        }}>
                        <p
                            style={{
                                fontSize: '12px',
                                whiteSpace: 'nowrap'
                            }}>
                            {currentRecords.length} of {filterData.length}
                        </p>
                    </div>
                </div>

            </div >

        </>
    )
}