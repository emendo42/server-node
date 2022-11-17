import db from '../utils/db'

export const getEmployees = async () => db.employee.findMany()

export const getEmployee = async (id) =>
  db.employee.findUnique({ where: { employeeId: id } })

export const addEmployee = async (employeeData) =>
  db.employee.create({ data: { ...employeeData } })

export const updateEmloyee = async (id, employeeData) => {
  const employee = await getEmployee(id)
  if (employee) {
    return db.employee.update({
      where: { employeeId: id },
      data: { ...employee, ...employeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteEmployee = async (id) =>
  db.employee.delete({ where: { employeeId: id } })