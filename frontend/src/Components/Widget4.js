import React from 'react';
import './Widget4.css';
import './Logo.js';


class Widget4 extends React.Component {

    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("https://odds.p.rapidapi.com/v1/odds?sport=soccer_france_ligue_one&region=eu&mkt=h2h&dateFormat=iso&oddsFormat=decimal", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "odds.p.rapidapi.com",
                "x-rapidapi-key": "3685a79f54msh29c76be0f40710cp1df765jsn975bada232b4"
            }
        })
            .then((response) => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({ post: result.data })
                }
            })
            .catch(err => {
                console.error(err);
            });

    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="tableau-style4">
                    <caption className="title_cote">Cotes des matchs à venir</caption>

                    {this.state.post.slice(0, 4).map((post, index) => (
                        <tr className="row_info" key={`list-elem-${index}`} >
                            <td className="team_home">{post.teams[0]}</td>
                            <td className="odds">{post.sites[0].odds.h2h[0]}</td>
                            <td className="odds">{post.sites[0].odds.h2h[2]}</td>
                            <td className="odds">{post.sites[0].odds.h2h[1]}</td>
                            <td className="team_away">{post.teams[1]}</td>
                        </tr>
                    ))}
                </table>
            </div >
        )

    }
}

export default Widget4;