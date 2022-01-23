import React from "react";

import "../assets/style/murImages.css";

export default class ImageWall extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const res = this.props.images.filter((imgData) =>
            imgData.texte
                .toLowerCase()
                .includes(this.props.filterText.toLowerCase())
        );
        const images = res.map((imgData) => (
            <img
                src={imgData.image}
                alt={imgData.texte}
                title={imgData.texte}
                onMouseOver={() =>
                    this.props.imageChanged(imgData.image, imgData.texte)
                }
                key={imgData.image}
            />
        ));

        return <div id="mur">{images}</div>;
    }
}
