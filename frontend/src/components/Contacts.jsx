import React from "react";


class ContactLink extends React.Component {
    render() {
        const url = this.props.url
        const title = this.props.title

        return(
            <>
                <a className="contact-link" href={url}>{title}</a>
            </>
        );
    };
};


class Contacts extends React.Component {
    render() {
        return(
            <div id='contact'>
                <h1 className="text-center">Контакты</h1>
                <div>
                    <ul>
                        <li><ContactLink url = 'https://t.me/kap1bar1k/' title = 'Telegram' /></li>
                        <li><ContactLink url = 'https://vk.com/egor.berdovskiy/' title = 'VK' /></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Contacts;
