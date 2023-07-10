import React from "react";


class Link extends React.Component {
    render() {
        const text = this.props.text;
        const url = this.props.url;

        return(
            <a className="custom-link" href={url}>{text}</a>
        );
    };
};

export { Link };
