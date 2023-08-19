
import { useEffect, useState } from 'react';
import './App.css';
import Editor from './Components/Editor';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
const [html,setHtml]=useLocalStorage('html','')
const [css,setCss]=useLocalStorage('css','')
const [js,setJS]=useLocalStorage('js','')
const [srcDoc,setsrcDoc]=useState('')


useEffect(()=>{
const timeout=setTimeout(()=>{
  setsrcDoc(`
  <html>
  <body>${html}</body>
  
  
  </html>
  `)
},250)

return ()=>{
  clearTimeout(timeout)
}

}, [html,css,js])


{/* <style>${css}</style>
<script>${js}</script> */}


  return (
    <>
    <div className="pane top-pane">
    <Editor
     language='xml'
     displayname='HTML'
     value={html}
     onChange={setHtml}
    />
    <Editor
     language='css'
     displayname='CSS'
     value={css}
     onChange={setCss}
    />
    <Editor
     language='javascript'
     displayname='JS'
     value={js}
     onChange={setJS}
    />
    
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
       sandbox="allow-scripts"
       frameBorder='0'
       width="100%"
       height="100%"

      />
    </div>
    </>
  )
}

export default App;


