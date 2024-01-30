import db from "../utils/database";
export const getAll = async () => {
  return db.execute(`SELECT * FROM todolist`);
};

export const createOne = async (work: string) => {
  return db.execute(
    `INSERT INTO todolist19.todolist ( name , status) VALUES (? ,?);
  `,
    [work, 0]
  );
};

export const deleteOneById = async (id: number) => {
  return db.execute(`DELETE FROM todolist19.todolist WHERE idWork = ?`, [id]);
};

export const updateOne = async (id: number) => {
  return db.execute(
    `UPDATE todolist19.todolist SET status = '1' WHERE (idWork = ?)`,
    [id]
  );
};
