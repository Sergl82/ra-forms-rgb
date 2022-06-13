import React, { useState } from 'react';
import './Converter.css';
import hexToRgb from './Hex2rgb/Hex2rgb';

const INITIONAL_COLOR = {
   rgb: '',
   hex: '#',
   backgroundColor: '#ffaaaa',
};

export default function Converter() {
   const [color, setColor] = useState(INITIONAL_COLOR);

   const onFieldChange = (e) => {
      const { target } = e;

      if (target.value.length < 7) {
         setColor((prev) => ({
            ...prev,
            hex: target.value,
         }));
         return;
      }

      const rgbValue = hexToRgb(target.value);
      setColor((prev) => ({
         ...prev,
         hex: target.value,
         rgb:
            rgbValue === null
               ? 'Ошибка!'
               : `rgb(${rgbValue.r},${rgbValue.g},${rgbValue.b})`,
         backgroundColor:
            rgbValue === null ? prev.backgroundColor : target.value,
      }));
   };

   return (
      <div
         className="Converter"
         style={{ backgroundColor: color.backgroundColor }}
      >
         <input
            className="Converter-field"
            value={color.hex}
            onChange={onFieldChange}
         />
         <div className="Converter-result" onChange={onFieldChange}>
            {color.rgb}
         </div>
      </div>
   );
}
