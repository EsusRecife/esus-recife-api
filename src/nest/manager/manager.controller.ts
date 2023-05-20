import { ManagerService } from "./manager.service";
import { Manager } from "./manager.model";
import { Body, Controller, Get, Post, Request,UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";

@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService: ManagerService) {}

    @UseGuards(AuthGuard)
    @Post()
    async create(
      @Body() user: Manager,
    ): Promise<Manager> {
      return this.managerService.create(user);
    }
    
    @UseGuards(AuthGuard)
    @Get()
    async findById(@Request() req): Promise<Manager> {
      return this.managerService.findByInepCod(req.payload.institutionInepCod);
    }
}