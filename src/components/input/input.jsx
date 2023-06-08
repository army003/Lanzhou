import 'twin.macro';

import React from 'react';
import { useController } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

function Input({ control, name, placeholder, label, rules, mask, type, disabled }) {
  const {
    field: { value, onChange, name: inputName },
    fieldState: { invalid, error }
  } = useController({ name: name, control: control, shouldUnregister: true });

  const onChangeHandler = value => {
    onChange(value);
  };

  return (
    <div>
      <IMaskInput
        id={inputName}
        name={inputName}
        mask={mask}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
