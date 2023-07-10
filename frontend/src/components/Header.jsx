import React from 'react';


class Header extends React.Component {
    render() {
        return(
            <header>
                <div id='navigation'>
                    <table id='navigation-table'>
                        <td><a href='#work'>.works()</a></td>
                        <td><a href='#contact'>.contacts()</a></td>
                    </table>
                </div>
            </header>
        )
    }
}

export default Header;