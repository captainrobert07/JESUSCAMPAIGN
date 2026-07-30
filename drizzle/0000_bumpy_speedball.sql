CREATE TABLE `house_of_worship_registrations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`registration_id` text NOT NULL,
	`full_name` text NOT NULL,
	`location` text NOT NULL,
	`contact_number` text NOT NULL,
	`event_date` text DEFAULT '2026-08-29' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `house_of_worship_registrations_registration_id_unique` ON `house_of_worship_registrations` (`registration_id`);