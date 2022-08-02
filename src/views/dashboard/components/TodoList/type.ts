export type todoType = {
  text: string
  done: boolean
}

export interface Ifn {
  ( params: todoType[] ): todoType[]
}

export type filtersType = {
  all: Ifn
  active: Ifn
  completed: Ifn
}

export type setType = {
  newPluralize: string
  newCapitalize: object
  allChecked: boolean
  filteredTodos: todoType[]
  remaining: number
}
