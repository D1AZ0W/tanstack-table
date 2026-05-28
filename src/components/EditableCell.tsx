import { useState, useEffect } from "react";

export const EditableCell = ({ getValue, column, row, table }: any) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-[300px] text-left"
      onBlur={onBlur}
    />
  );
};
