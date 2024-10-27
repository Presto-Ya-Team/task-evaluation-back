import { DynamicModule, Module } from "@nestjs/common";
import { UseCaseProxy } from "./usecases-proxy";
import { GetDummiesUseCases } from "src/usecases/dummy/get-dummies.usecases";


@Module({
    imports: [],
})
export class DummyUsecasesProxyModule {
    static GET_DUMMIES_USECASES_PROXY = 'GET_ALL_DUMMIES_USECASES_PROXY';

    static register(): DynamicModule{
        return {
            module: DummyUsecasesProxyModule,
            providers: [
                {
                    inject: [],
                    provide: this.GET_DUMMIES_USECASES_PROXY,
                    useFactory: (
                        
                        ) => new UseCaseProxy(new GetDummiesUseCases(
                                
                            )),
                },
],
            exports: [
                this.GET_DUMMIES_USECASES_PROXY,
            ]
        }
    }
}