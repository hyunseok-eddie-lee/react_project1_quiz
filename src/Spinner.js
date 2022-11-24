import React from "react";
import styled from "styled-components";

import rtan from "./scc_img01.PNG";

const Spinner = (props) => {
    return (
        <div 
            style={{
                background: "#d9024b",
                // background: "#df402c88",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
                zIndex: 999,
                top: 0,
                left: 0,
            }}>
                <img src={rtan}
                    style={{
                        width: "25%",
                    }}
                />
        </div>
    )
}

export default Spinner;