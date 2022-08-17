import React, {Component} from "react";
import Table from 'react-bootstrap/Table';

const studentList = [
    {
        id: 201,
        name: "A",
        age: 20,
        address: "HN"
    },
    {
        id: 202,
        name: "B",
        age: 22,
        address: "DN"
    },
    {
        id: 203,
        name: "C",
        age: 20,
        address: "HD"
    },
    {
        id: 204,
        name: "D",
        age: 26,
        address: "SG"
    },
    {
        id: 205,
        name: "F",
        age: 23,
        address: "DL"
    },
]

class ShowStudentList extends Component {
    
    render() {
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }

}

export default ShowStudentList;