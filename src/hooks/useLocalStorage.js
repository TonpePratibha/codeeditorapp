import React from 'react'
import { useEffect,useState } from 'react'

const PREFIX='codepane-clone'

export default function useLocalStorage(key,initialValue) {
  const prefixedKey= PREFIX + key
  const [Value,setValue]=useState(()=>{
    const jsonvalue=localStorage.getItem(prefixedKey)
    if(jsonvalue !=null)
    return JSON.parse(jsonvalue)

    if(typeof initialValue==='function'){
      return initialValue()}
      else {
      return initialValue
      }
    

  })

  useEffect(()=>{
    localStorage.setItem(prefixedKey,JSON.stringify(Value))
  } ,[prefixedKey,Value])
  return [Value,setValue]
    
}
