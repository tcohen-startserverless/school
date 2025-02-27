import { Entity, EntityItem } from 'electrodb';
import { Config } from '@core/dynamo';
import { ulid } from 'ulid';

export const School = new Entity(
  {
    model: {
      entity: 'school',
      version: '1',
      service: '',
    },
    attributes: {
      id: {
        type: 'string',
        required: true,
        default: () => ulid(),
      },
      name: {
        type: 'string',
        required: true,
      },
      address: {
        type: 'string',
        required: false,
      },
      city: {
        type: 'string',
        required: false,
      },
      state: {
        type: 'string',
        required: false,
      },
      zipCode: {
        type: 'string',
        required: false,
      },
      phone: {
        type: 'string',
        required: false,
      },
      status: {
        type: ['ACTIVE', 'INACTIVE', 'PENDING', 'SUSPENDED'] as const,
        required: true,
        default: 'ACTIVE',
      },
      createdAt: {
        type: 'number',
        required: true,
        default: () => Date.now(),
      },
      updatedAt: {
        type: 'number',
        required: true,
        default: () => Date.now(),
      },
    },
    indexes: {
      primary: {
        scope: 'school',
        pk: {
          field: 'pk',
          composite: [],
        },
        sk: {
          field: 'sk',
          composite: ['id'],
        },
      },
    },
  },
  Config
);

export type SchoolItem = EntityItem<typeof School>;
