export enum TaskStatus {
    CREATED = 'created',
    RUNNING = 'running',
    COMPLETED = 'completed',
    FAULTED = 'failed'
}

export enum TaskNameType {
    SYMBOL = 'symbol',
    QUANT = 'quant',
    UNKNOW = 'unknow'
}
export enum TaskPriority {
    LOWEST = 0,
    NORMAL = 2,
    HIGHEST = 4
}

export interface ITask {
    id?: number;
    status: TaskStatus;
    name: TaskNameType;
    priority: TaskPriority;
    params?: string
    message?: string
    result?: string
    created?: Date;
    updated?: Date;
}

export interface IQuantTask {
    symbol: string;
    strategy: string;
    to: string;
}