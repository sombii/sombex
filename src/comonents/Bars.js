import React from "react";
import styled from "styled-components";


const Bars = () => {
    return (
        <BarsContainer>
            <Bar/>
            <Bar/>
            <Bar/>
        </BarsContainer>
    )
}

// const Bar = () => {
//     return (
//         <SingleBar/>
//     )
// }

const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 2rem;
  max-width: 900px;
  margin: auto;
  width: 100%;
`

const Bar = styled.div`
  min-width: 15rem;
  width: 40%;
  height: 0;
  border-top: 1px solid #b8bbb6;
  margin-top: 2rem;
`

export default Bars;