import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IQuantTask, ITask, TaskNameType, TaskPriority, TaskStatus } from '@common/models/task'
// TODO: move to enity or data folder
export class QuantTask implements ITask {
    id?: number;
    status: TaskStatus = TaskStatus.CREATED;
    name: TaskNameType = TaskNameType.QUANT;
    priority: TaskPriority = TaskPriority.NORMAL;
    params?: string;
    message?: string;
    result?: string;
    created?: Date;
    updated?: Date;
    backTest: object = {};
    constructor(init?: Partial<ITask>) {
        Object.assign(this, init); // like super(this)
    }
    setBackTest() {
        if (this.result) {
            this.backTest = JSON.parse(this.result)
        } else {
            this.backTest = {
                "Calmar Ratio": "0",
                "Annual Growth Rate (%)": "0%",
                "Value-at-Risk": "0",
                "Cumulative Returns (%)": "0%",
                "Max Drawdown (%)": "0%",
                "Resampled Time": "0",
                "Risk Free Return Rate": "0.0",
                "Sharpe Ratio": "0"
            }
        }
    }
}

@Injectable()
export class TaskService {
    baseUrl = '/api/task';
    constructor(private http: HttpClient) {

    }

    get(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.baseUrl}/${id}`);
    }

    createQuantTask(task: IQuantTask): Observable<QuantTask> {
        return this.http
            .post<ITask>(`${this.baseUrl}/quant`, { ...task, name: TaskNameType.QUANT })
            .pipe(map(this.quantTaskMap));
    }

    quantTaskMap(task: ITask) {
        let quantTask = new QuantTask(task);
        quantTask.setBackTest();
        return quantTask;
    }
    
    getQuantTask(id: number): Observable<QuantTask> {
        return this.get(id).pipe(map(this.quantTaskMap));
    }
}