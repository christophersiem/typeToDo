export type Status = "OPEN" | "IN_PROGRESS" | "DONE"

export interface Todo {
    title: string;
    status: Status;
}



