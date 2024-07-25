import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { MarcasModule } from './marcas/marcas.module';
import { PaisesModule } from './paises/paises.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { ProvinciaLocalidadModule } from './provincia_localidad/provincia_localidad.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bootcamp052024',
      database: 'db_data',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    PaisesModule,
    MarcasModule,
    LenguajesModule,
    AutosModule,
    LocalidadesModule,
    ProvinciasModule,
    ProvinciaLocalidadModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
