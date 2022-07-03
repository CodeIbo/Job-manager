import styled from "@emotion/styled";

const AddNew = styled('button')({
    all: 'unset',
    backgroundColor:'#5452ab',
    borderRight: '1px solid white',
    color: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    transition: 'background-color, 0.7s ease-in-out ',
    textAlign: 'center',
    width: '50%',
    ":hover":{
        backgroundColor:'#242353',
        transition: 'background color 0.7s ease-in-out'
    }
})

export default AddNew