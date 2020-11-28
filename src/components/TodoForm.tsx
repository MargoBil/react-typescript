import React, { useRef } from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
//   const [title, setTitle] = useState<string>("");
//   const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };
  const ref = useRef<HTMLInputElement>(null);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
        onAdd(ref.current!.value)
        ref.current!.value=''
    //   setTitle('')
    }
  };

  return (
    <div className="input-field margin-top2rem">
      <input
        // onChange={handleChangeTitle}
        // value={title}
        onKeyPress={handleKeyPress}
        ref={ref}
        id="title"
        type="text"
        placeholder="Put text"
      />
      <label htmlFor="title" className="active">
        Put text
      </label>
    </div>
  );
};
