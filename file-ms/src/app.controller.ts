import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    @MessagePattern({ cmd: 'get-file' })
    accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => a + b);
    }
}
