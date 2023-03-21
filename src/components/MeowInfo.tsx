'use client'
import React, {useEffect, useState} from 'react';

const MeowInfo = () => {
    const [factText, setFactText] = useState("");

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com')
            .then((res) => res.json())
            .then(data => setFactText(data.data[0]));
    }, [])

    return (
        <article>{factText}</article>
    );
};

export default MeowInfo;