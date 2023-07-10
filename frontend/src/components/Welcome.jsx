import React from 'react';


class Welcome extends React.Component {
    render() {
        const telegram = this.props.telegram;

        return (
            <div id='welcome-section'>
                <div id='welcome-text'>
                    <p>Приветствую тебя на моем сайте, меня зовут Егор, я python-разработчик, ниже представлены мои работы, связь со мной — <a className='link' href={`https://t.me/${telegram}`}>@{telegram}</a></p>
                </div>
            </div>
        )
    };
};

export default Welcome;
