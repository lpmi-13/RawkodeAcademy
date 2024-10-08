import { logger, task } from "@trigger.dev/sdk/v3";
import type { UserCreatedEvent } from "@workos-inc/node";

export const userRegistered = task({
	id: "user.registered",
	retry: {
		maxAttempts: 5,
	},
	run: async (payload: UserCreatedEvent) => {
		logger.log(`User ${payload.data.id} registered`);
		return;
	},
});
