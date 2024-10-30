import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Search = () => {
    const navigate = useNavigate();

    return (
        <div style={{display: "flex"}}>
            <KeyboardBackspaceIcon onClick={()=> navigate('/')}
                                    style={{fontSize: "50px", cursor: "pointer"}}/>
        </div>
    );
};

export default Search;