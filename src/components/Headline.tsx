import React from 'react';



export interface HeadlineProps {
    title: string
}

export default function Headline({title}: HeadlineProps) {
    return (
            <h1>{title}</h1>
    )
}
