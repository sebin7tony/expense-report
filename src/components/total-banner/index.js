import React from "react"
import "./index.css"

const TotalBanner= ({total}) => {
    return(
        <section className="total">
            {total}
        </section>
    );
}

export default TotalBanner;