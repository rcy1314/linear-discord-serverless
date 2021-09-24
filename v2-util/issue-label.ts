import {z} from 'zod';
import {Action, createAllStates, dateSchema, defaultRemoveSchema} from './util';

const commons = z.object({
	id: z.string().uuid(),
	createdAt: dateSchema,
	updatedAt: dateSchema,
	name: z.string(),
	color: z.string(),
	teamId: z.string().uuid(),
	creatorId: z.string().uuid(),
});

export const issueLabel = createAllStates(commons, defaultRemoveSchema).and(
	z.object({
		type: z.literal('IssueLabel'),
	}),
);
