import * as Joi from 'joi';

export default Joi.object({
  DATABASE_TYPE: Joi.string()
    .valid('mysql', 'postgres', 'oracle')
    .default('mysql'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(3306),
  DATABASE_USERNAME: Joi.string().default('root'),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_ENTITIES: Joi.string()
    .required()
    .default('src/**/*.entity{.ts,.js}'),
  DATABASE_SYNCHRONIZE: Joi.boolean().default(true),
});
