import * as Joi from 'joi';

export default Joi.object({
  APP_NAME: Joi.string(),
  APP_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  APP_HOST: Joi.string().hostname().default('http://127.0.0.1:3000'),
  APP_PORT: Joi.number().port().default(3000),
});
