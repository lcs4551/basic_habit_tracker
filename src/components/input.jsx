import React, { memo } from 'react';

const Input = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form ref={formRef} className="input" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" autoFocus placeholder="text"/>
        <button className="add-button">Add</button>
    </form>
  );
});

export default Input;
