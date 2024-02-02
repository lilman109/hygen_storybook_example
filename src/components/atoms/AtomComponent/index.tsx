"use client";

import { useAtomComponentHooks } from "./hooks";

export interface AtomComponentProps {
  textColor: string;
  borderColor: string;
  handleClick: () => void;
}

export const AtomComponent = (props: AtomComponentProps) => {
  const { textColor, borderColor, handleClick } = props;
  const { value, setValue } = useAtomComponentHooks(props);

  return (
    <button
      style={{
        color: textColor,
        border: "2px solid",
        borderColor: borderColor,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Atom Component
    </button>
  );
};
