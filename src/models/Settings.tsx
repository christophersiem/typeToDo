export type Status = "OPEN" | "IN_PROGRESS" | "DONE"

export interface Todo {
    id: number
    title: string
    status: Status
}



