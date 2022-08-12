import React from "react";
import Table from "react-bootstrap/Table";

const studentsList = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]

const ShowInforStudents = () => {
    return (
        <div>
            <Table striped bordered variant="dark">
                <thead>
                    <tr>
                        <td>Company</td>
                        <td>Contact</td>
                        <td>Country</td>
                    </tr>
                </thead>
                <tbody>
                    {studentsList.map((student) => {
                        return(
                            <tr key={student.id}>
                                <td>{student.company}</td>
                                <td>{student.contact}</td>
                                <td>{student.country}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
        
    );
};

export default ShowInforStudents;