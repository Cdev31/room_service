import { IRoomServices } from "./interface";




export class RoomAdapter implements IRoomServices {

    create(room: object): void{

    }
    
    findByHost(id: string): void {
        throw new Error("Method not implemented.");
    }

    find(term: string): void {
        throw new Error("Method not implemented.");
    }

    update(changes: object, id: string): void {
        throw new Error("Method not implemented.");
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
}