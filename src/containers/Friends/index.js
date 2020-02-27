import React from 'react'

class Friends extends React.Component {
    render() {
        return (
            <div className="friends">
                <div className="container">
                <table className="table ">
                    <thead className="thead-light thead-bg">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Mutual Friends</th>
                            <th scope="col">Mutual Communities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brant</td>
                            <td>Looking for a group to play Fortnite</td>
                            <td>Friends go here</td>
                            <td>Servers go here</td>
                        </tr>
                        <tr>
                            <td>TheRandomPerson2</td>
                            <td>I love Roblox</td>
                            <td>Friends go here</td>
                            <td>Servers go here</td>
                        </tr>
                        <tr>
                            <td>Scanworks</td>
                            <td>I suck really bad to Bedwars</td>
                            <td>Friends go here</td>
                            <td>Servers go here</td>
                        </tr>
                        <tr>
                            <td>Vidsify</td>
                            <td>Beep Bot I'm a Bot!</td>
                            <td>Friends go here</td>
                            <td>Servers go here</td>
                        </tr>
                        <tr>
                            <td>Flakenstine</td>
                            <td>Amazon is my life</td>
                            <td>Friends go here</td>
                            <td>Servers go here</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Friends;
