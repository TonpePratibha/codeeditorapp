import React, { useState } from 'react';
import'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt ,faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
const[open, setOpen]=useState(true)

const {
    value,
    displayname,
    language,
    onChange
}=props


function handlechange(editor,data,value){
  onChange(value)
}
  return (
    <div className={`editor-container ${open ? '' :'collapsed'}`}>
        <div className='editor-title'>
            {displayname}
            <button
            type="button"
            className='expand-collapse-btn'
            onClick={()=>{setOpen(prevopen=>!prevopen)}}
            >
                <FontAwesomeIcon icon={open? faCompressAlt: faExpandAlt }/>
                </button>
        </div>
      <ControlledEditor
      onBeforeChange={handlechange}
      value={value}
      className='code-mirror-wrapper'
      options={{
        lineWrapping:true,
        lint:true,
        mode:language,
        lineNumbers:true,
        theme:'material'

      }}
      />
    </div>
  )
}

