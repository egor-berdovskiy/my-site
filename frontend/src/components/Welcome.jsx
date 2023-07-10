import React from 'react';


class Welcome extends React.Component {
    render() {
        return (
            <div id='welcome-text'>
                <p>Приветствую тебя на моем сайте, меня зовут Егор, я python-разработчик, ниже представлены мои работы, связь со мной — <a className='telegram-link' href={`https://t.me/${this.props.telegram}`}>@{this.props.telegram}</a></p>
            </div>
        )
    };
};

export default Welcome;
