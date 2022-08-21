import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import Input from "../../components/input";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function LoginInput({value, onChange, type, title}) {

  const cn = bem('LoginInput');

  const callbacks = {
    onChange: useCallback((val) => onChange(val), [onChange])
  }

  return (
    <div className={cn()}>
      <div className={cn('title')}>{title}</div>
      <Input value={value}
             onChange={callbacks.onChange}
             type={type}
             withoutThrottle={true}/>
    </div>
  )
}

LoginInput.propTypes = {
}

LoginInput.defaultProps = {
}

export default React.memo(LoginInput);
