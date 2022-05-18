import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../store/Contexts'
import './Dashboard.css'
// import Header from './Header'

function Dashboard() {
    
    const { firebase } = useContext(FirebaseContext)
    const [teams, setTeams] = useState([])
    // const [regNo, setRegNo] = useState('')

    // firebase.firestore().collection('Registration Number Online Treasure Hunt').doc('unique').get().then((res) => {
    //     setRegNo(res.data().number)
    // })
    useEffect(() => {
        
        firebase.firestore().collection('Contestant Venture').get().then((snapshot) => {
            const alldocs = snapshot.docs.map((team) => {
    
                return {
                    ...team.data(),
                    // id: team.id
    
                }
            })
            setTeams(alldocs)
        })
    },[firebase])
    
    
    console.log(teams);
    return (
        <div className="dash">
            {/* <Header/> */}
            <h1>Dashboard VENTURE - Idea pitching competition</h1>
            <div className="dataDiv1">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Resitration number</th> */}
                                <th>College</th>
                                <th>Name</th>
                                <th>Email<br /></th>
                                <th>Phone no <br /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team, index) => {
                                console.log(team.file_Url)
                                return (<tr key={index}>
                                    
                                    {/* <td>{regNo}</td> */}
                                    <td>{team.College}</td>
                                    <td>{team.Name}</td>
                                    <td>{team.Email}</td>
                                    <td>{team.Phone_no}</td>
                                    {/* <td><a href={`${team.file_Url}`}>{team.file_Url}</a></td> */}
                                </tr>)

                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard