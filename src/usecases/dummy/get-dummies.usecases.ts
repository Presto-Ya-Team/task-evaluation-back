import { DummyTypes } from "src/domain/enums/dummy-types.enum";
import { DummyModel } from "src/domain/model/dummy.model";

export class GetDummiesUseCases {
    constructor() {}

    getDummies(): DummyModel[] {
        let dummies = [];
        const dummy1 = new DummyModel();
        dummy1.name = "Dummy 1";
        dummy1.type = DummyTypes.EXTRA;
        dummies.push(dummy1);
        return dummies; 
    }
}