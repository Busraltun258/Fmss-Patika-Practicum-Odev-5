import React from 'react'
import 'pumpkinui/dist/index.css'

import { Button_Types} from "pumpkinui";
import {Button} from "pumpkinui"

//olusturmus oldugum componenet ve style dosyalarini import ediyorum.
//5 tanebuton tipini olusturuyorum.

const App = () => {
  return(
    <div className="app">
      <div className="button-type">
        <Button type={Button_Types.PRIMARY} text="Primary Button"/>
        <Button type={Button_Types.DEFAULT} text="Default Button"/>
        <Button type={Button_Types.DASHED} text="Dashed Button"/>
        <Button type={Button_Types.TEXT} text="Text Button"/>
        <Button type={Button_Types.LINK} text="Link Button"/>
      </div>


    </div>
  )
}

export default App;
