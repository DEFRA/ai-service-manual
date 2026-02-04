import Joi from 'joi'

const entrySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  url: Joi.string().uri().allow('').required(),
  quadrant: Joi.string()
    .valid('Frameworks', 'Platforms', 'Techniques', 'Tools')
    .required(),
  ring: Joi.string().valid('Adopt', 'Pilot', 'Assess', 'Hold').required(),
  createdTimestamp: Joi.string().isoDate().required(),
  updatedTimestamp: Joi.string().isoDate().required(),
  active: Joi.boolean().required()
})

const radarSchema = Joi.object({
  entries: Joi.array().items(entrySchema).required()
})

export { radarSchema }
