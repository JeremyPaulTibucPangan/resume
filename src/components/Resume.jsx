import React from 'react';

const Resume = () => {
    return (
        <table style={{ width: '724px', height: '1024px' }}>
            <tbody>
                <tr> {/*Row 1*/}
                    <td colSpan="4" rowSpan="8" align="center" style={{ maxWidth: '100%', maxHeight: '100%', padding: 0 }}>
                        <img src="profile.jpg" style={{ width: '100%', height: '100%', display: 'block', margin: 'auto' }} alt="Profile" />
                    </td>
                </tr>
                <tr> {/*Row 2*/}
                    <td colSpan="4">&nbsp;</td>
                </tr>
                <tr style={{ fontSize: '25px' }}> {/*Row 3*/}
                    <th colSpan="4" rowSpan="2">Jeremy Paul T. Pangan</th>
                </tr>
                <tr> {/*Row 4*/}</tr>
                <tr> {/*Row 5*/}
                    <td colSpan="4" style={{ fontSize: '25px' }}>College Graduate</td>
                </tr>
                <tr style={{ fontSize: '20px', color: 'red' }}> {/*Row 6*/}
                    <th colSpan="4" rowSpan="2">MAIN OBJECTIVE</th>
                </tr>
                <tr> {/*Row 7*/}</tr>
                <tr> {/*Row 8*/}
                    <td colSpan="4" rowSpan="5" style={{ fontSize: '15px' }}>To Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company and Seeking position in a fast-paced production environment to develop new skills. Am willing to learn new processing and manufacturing techniques and enjoy working as part of a team.</td>
                </tr>
                <tr> {/*Row 9*/}
                    <th colSpan="4" rowSpan="2" style={{ fontSize: '20px', backgroundColor: 'red', color: 'white' }}>CONTACT</th>
                </tr>
                <tr> {/*Row 10*/}</tr>
                <tr> {/*Row 11*/}
                    <td colSpan="4" style={{ backgroundColor: 'red', color: 'white', fontSize: '15px' }}>+956 920 4853</td>
                </tr>
                <tr> {/*Row 12*/}
                    <td colSpan="4" style={{ backgroundColor: 'red', color: 'white', fontSize: '15px' }}>www.resumehtml.com </td>
                </tr>
                <tr> {/*Row 13*/}
                    <td colSpan="4" style={{ backgroundColor: 'red', color: 'white', fontSize: '15px' }}>jptpangan.student@ua.edu.ph</td>
                    <th colSpan="4" rowSpan="2" style={{ fontSize: '20px', color: 'red' }}>WORK EXPERIENCE</th>
                </tr>
                <tr> {/*Row 14*/}
                    <td colSpan="4" style={{ backgroundColor: 'red', color: 'white', fontSize: '15px' }}>Camp Olivas City of San Fernando Pampanga</td>
                </tr>
                {/* Rest of the rows */}
            </tbody>
        </table>
    );
};

export default Resume;