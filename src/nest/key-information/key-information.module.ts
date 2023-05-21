import { KeyInformationController } from './key-information.controller';
import { KeyInformationService } from './key-information.service';
import { KeyInformation } from './key-information.model';
import { Module } from '@nestjs/common';

@Module({
  controllers: [KeyInformationController],
  providers: [
    KeyInformationService,
    {
      provide: 'Key_Information_Repository',
      useValue: KeyInformation,
    },
  ],
  exports: [KeyInformationService],
})
export class KeyInformationModule {}
