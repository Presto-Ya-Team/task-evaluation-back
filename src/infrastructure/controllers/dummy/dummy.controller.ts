import { Controller, Get, Inject } from '@nestjs/common';
import { DummyUsecasesProxyModule } from 'src/infrastructure/usecases-proxy/dummy-usecases-proxy.module';
import { UseCaseProxy } from 'src/infrastructure/usecases-proxy/usecases-proxy';
import { GetDummiesUseCases } from 'src/usecases/dummy/get-dummies.usecases';

@Controller('dummies')
export class DummyController {
  constructor(
    @Inject(DummyUsecasesProxyModule.GET_DUMMIES_USECASES_PROXY)
    private readonly getDummiesUsecaseProxy: UseCaseProxy<GetDummiesUseCases>,
  ) {}

  @Get('')
  async getDummies() {
    const dummies = await this.getDummiesUsecaseProxy
      .getInstance()
      .getDummies();
    return dummies;
  }
}
