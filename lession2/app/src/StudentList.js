import './Student.css';

const students = [{
    company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'
}, {
    company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'
}, {
    company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'
}, {
    company: 'Island Trading', contact: 'Helen Bennett', country: 'UK'
}, {
    company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada'
}, {
    company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'
}]

function StudentList() {
    return (<div>
            <div>
                <h1 className="head">Students</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map(student => (<tr key={student.company}>
                            <td>{student.company}</td>
                            <td>{student.contact}</td>
                            <td>{student.country}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>);
}

export default StudentList;
