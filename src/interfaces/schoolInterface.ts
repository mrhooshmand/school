import { Area_ } from "./areaInterface";
import { User_ } from "./userInterface";

export interface School_ {
    id: number,
    name: string,
    code: string,
    area_id: number,
    manager_id: number,
    grade: string,
    type: string,
    adress: string,
    phone_number: string,
    lat: string,
    lon: string,
    banner: string,
    logo: string,
    created_at: string,
    updated_at: string,
    area: Area_,
    manager: User_
}