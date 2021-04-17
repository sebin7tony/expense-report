import React from "react"
import "./index.css"

const TotalBanner= ({total,error}) => {
    return(
        <section className="total">
            {error ? `Max value ${total} reached` : `Total expense amount ${total}`}
        </section>
    );
}

export default TotalBanner;