import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/nest/app.module';
import { INestApplication } from '@nestjs/common';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  const access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0aXR1dGlvbklkIjoiNzNlNWNkYzEtMmQwOS00Mjc4LTllMjUtYzY0NDBjNTc3NWRhIiwiaW5zdGl0dXRpb25JbmVwQ29kIjoiMjYxMjc3OTIiLCJpYXQiOjE2ODU5MjY1ODEsImV4cCI6MTY4NTkzMDE4MX0._ujp4djkmXtIPp757-fq_sIhwpgb5wXlt9JxvTzH-GY';
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  /**
   *
   * Auth
   *
   */

  it('/auth/login (POST) (Login com sucesso - 201)', () => {
    const payload = { inepCod: '26127792', password: '26127792' };

    return request(app.getHttpServer())
      .post('/auth/login')
      .send(payload)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  it('/auth/login (POST) (Senha Incorreta - 401)', () => {
    const payload = { inepCod: '26127792', password: '123' };

    return request(app.getHttpServer())
      .post('/auth/login')
      .send(payload)
      .expect(401)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  /**
   *
   * Educational Institution
   *
   */

  it('/educational-institution (POST) (Escola cadastrada - 201)', () => {
    const payload = {
      inepCod: '26118734',
      name: 'ESCOLA MUNICIPAL MONTEIRO LOBATO',
      cnpj: '03153729000196',
      cep: '52040365',
      streetNumber: '3124',
      cellphone: '558133553486',
      email: 'emmonteirolobato@gov.br',
      password: '26118734',
    };

    return request(app.getHttpServer())
      .post('/educational-institution')
      .send(payload)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  it('/educational-institution (POST) (Escola já foi cadastrada - 403)', () => {
    const payload = {
      inepCod: '26118734',
      name: 'ESCOLA MUNICIPAL MONTEIRO LOBATO',
      cnpj: '03153729000196',
      cep: '52040365',
      streetNumber: '3124',
      cellphone: '558133553486',
      email: 'emmonteirolobato@gov.br',
      password: '26118734',
    };

    return request(app.getHttpServer())
      .post('/educational-institution')
      .send(payload)
      .expect(403)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  it('/educational-institution (DELETE) (Escola deletada - 200)', () => {
    return request(app.getHttpServer())
      .delete('/educational-institution')
      .expect(200)
      .expect((res) => {
        console.log(res.text);
      });
  });

  /**
   *
   * Manager
   *
   */

  it('/manager (POST) (Gestor cadastrado - 201)', () => {
    const payload = {
      inepCod: '26118734',
      name: 'ESCOLA MUNICIPAL MONTEIRO LOBATO',
      cpf: '12312312332',
    };

    return request(app.getHttpServer())
      .post('/manager')
      .send(payload)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  /**
   *
   * Internal Use
   *
   */

  it('/internal-use (POST) (informação cadastrada - 201)', () => {
    const payload = {
      activity: 'Horta comunitaria',
      qtyStudent: 8,
      qtyEducator: 2,
      infoStudent:
        'Estudantes divididos em duas equipes, cada uma responsavel com um tipo de hortaliça',
      materials:
        'Composteiras de três compartimentos : 4 ; Composteiras (garrafa pet), qty: 6',
    };

    return request(app.getHttpServer())
      .post('/internal-use')
      .send(payload)
      .set('Authorization', `Bearer ${access_token}`)
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });

  it('/internal-use/dashboard/activity (GET) (informação cadastrada - 200)', () => {
    return request(app.getHttpServer())
      .get('/internal-use/dashboard/activity')
      .set('Authorization', `Bearer ${access_token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        console.log(res.text);
      });
  });
});
