import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidade } from '../localidades/entities/localidade.entity';
import { Paise } from '../paises/entities/paise.entity';
import { Provincia } from '../provincias/entities/provincia.entity';
import { Role } from '../roles/entities/role.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Paise, Localidade, Provincia])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
