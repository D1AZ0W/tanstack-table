export const ActionButton = ({ row, table }: any) => {
  const handleClick = () => {
    const current = row.original;
    const fname = prompt("Enter first name:", current.first_name);
    const lname = prompt("Enter last name:", current.last_name);
    const user = prompt("Enter username:", current.username);
    const email = prompt("Enter email:", current.email);
    const gender = prompt("Enter gender:", current.gender);
    const linked = prompt("Enter linkedin skills:", current.linkedin_skills);

    if (fname !== null) {
      table.options.meta?.updateData(row.index, "first_name", fname);
    }
    if (lname !== null) {
      table.options.meta?.updateData(row.index, "last_name", lname);
    }
    if (user !== null) {
      table.options.meta?.updateData(row.index, "username", user);
    }
    if (email !== null) {
      table.options.meta?.updateData(row.index, "email", email);
    }
    if (gender !== null) {
      table.options.meta?.updateData(row.index, "gender", gender);
    }
    if (linked !== null) {
      table.options.meta?.updateData(row.index, "linkedin_skills", linked);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-green-400 hover:bg-blue-400 rounded-xl p-2"
    >
      ✏️
    </button>
  );
};
