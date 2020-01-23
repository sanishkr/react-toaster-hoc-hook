import React, { useEffect, useRef } from 'react';

function Toast({ id, children, remove }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => removeRef.current(), duration);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast">
      <input
        onClick={(e) => {
          e.persist()
          setTimeout(()=>removeRef.current(),600)
        }}
        type="checkbox"
        className="hidden"
        id={id}
      />
      <label
        className="toast__label"
        title="close"
        htmlFor={id}
      >
        {children}
        <span className="toast__close-btn">&#10007;</span>
      </label>
    </div>
  );
}

export default Toast;