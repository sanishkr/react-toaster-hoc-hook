import React, { useContext, useState } from 'react';
import { createPortal } from "react-dom";
import Toast from "./Toast";

const ToastContext = React.createContext(null);

function withToastProvider(Component) {
  function WithToastProvider(props) {
    const [toasts, setToasts] = useState([]);
    const add = content => {
      const id = new Date().getTime();
      setToasts([...toasts, { id, content }]);
    };
    const remove = id => setToasts(toasts.filter(t => t.id !== id));

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />

        {createPortal(
          <div className="toasts-wrapper">
            {toasts.map(t => (
              <Toast key={t.id} id={t.id} remove={() => remove(t.id)}>
                {t.content}
              </Toast>
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    );
  }

  return WithToastProvider;
}

function useToast() {
  const context = useContext(ToastContext);
  return { add: context.add, remove: context.remove };
}

export { withToastProvider, useToast };