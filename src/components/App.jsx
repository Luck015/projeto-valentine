import React from 'react';
import { useState } from 'react';

import data from '../data/data'

import '../css/style.css'

export default function App(){
    const date = new Date
    const dia = date.getDate()

    return(
        <div className='container'>
            <div className="container__card">
                <p>
                    #{dia} {data[dia].mensagem}
                </p>
            </div>
        </div>
        
    )
}