import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  createUser(@Body() newRole: CreateRoleDto): Promise<Role> {
    return this.rolesService.createRole(newRole);
  }

  @Get()
  getRoles(): Promise<Role[]> {
    return this.rolesService.getRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateData: UpdateRoleDto, @Res() res: Response) {
    return this.rolesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
