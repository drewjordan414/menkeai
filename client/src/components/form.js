import React from "react";

const Form = () => {
    return(
        <div className="form-section">
            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask me anything..."
            ></textarea>
            <button className="btn">
                Generate Response 🤖
            </button>
        </div>
    )
}

export default Form;