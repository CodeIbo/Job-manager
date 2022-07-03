import styled from "@emotion/styled";

const BackgroundPopUp = styled('section')({
    backgroundColor:'rgba(0, 0, 0, 0.555)',
    backdropFilter:'blur(3.5px)',
    height: '100vh',
    top:0,
    left:0,
    position: "fixed",
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    zIndex: 5,
    width: '100%', 
})

export default BackgroundPopUp