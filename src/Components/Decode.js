import React from 'react';
import '../App.css';

class Decode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            output: "",
            caesarShiftNumber: 7
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
            output: this.decodeText(event.target.value)
        })
    }

    decodeText = (text) => {
        const LETTER_REGEXP = /[^a-zA-Z ]/gm;
        return text.replace(LETTER_REGEXP, "")
            .split("")
            .map(letter => {
                const charCode = letter.charCodeAt(0);
                if (charCode === 32) return letter;
                return charCode >= 65 && charCode <= 90
                    ? String.fromCharCode(90 - (90 - charCode + this.state.caesarShiftNumber) % 26 )
                    : String.fromCharCode(122 - (122 - charCode + this.state.caesarShiftNumber) % 26 )
            })
    }
    render() {
        return (
            <div className="col">
                <h2>DECODE</h2>
                <p>Message</p>
                <textarea id="input" onChange={this.handleChange} rows="2" cols="50" value={this.state.input} /><br/>
                <p>Decrypted Message</p>
                <span className="result">{this.state.output}</span>
            </div>
        );
    }

}

export default Decode;
