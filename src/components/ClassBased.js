import React from 'react';
import PropTypes from 'prop-types'; 

class ClassBased extends React.Component {
    static propTypes = {
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.number
    };

    render() {
        const styles = {
            boxShadow: "0.5px 0.5px #C0C0C0",
            padding: "20px",
            display: "inline-block",
            position: "absolute",
            width: "38%",
        };
    
        const styleContainer = {
            lineHeight: "10px"
        };
    
        const colorText = {
            textTransform: "uppercase",
            color: "#808080"
        };
    
        const textTransform = {
            textTransform: "uppercase",
        };
    
        const styleDivider = {
            width: "70%",
            margin: "auto",
            paddingBottom: "20px",
            borderTop: "0.5px solid #C0C0C0"
        };
    
        const styleInfo = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        };
    
        const stylePrice = {
            fontSize: "30px",
        };
    
        const styleBtn = {
            textTransform: "uppercase",
            background: "#000000",
            color: "#ffffff",
            padding: "7px 17px",
            border: "none"
        };

        return (
            <div className="main-content" style={styles}>
                <div class="container" style={styleContainer}>
            <div><h2>{this.props.brand}</h2></div>
                    <h2>{this.props.brand}</h2>
                    <h1 style={textTransform}>{this.props.title}</h1>
                    <h3 style={colorText}>{this.props.description}</h3>
                </div>
                <div className="description">
                    <p>{this.props.descriptionFull}</p>
                </div>
                <div className="highlight-window mobile">
                   <div className="highlight-overlay">

                    </div>
                </div>
                <div className="divider" style={styleDivider}></div>
                <div className="purchase-info" style={styleInfo}>
                    <div className="price" style={stylePrice}>{this.props.currency}{this.props.price.toFixed(2)}</div>
                    <button style={styleBtn}>Добавить в корзину</button>
                </div>
            </div>
        )
    }
};

export default ClassBased;