CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) UNIQUE,
  `email` varchar(100) UNIQUE,
  `password` varchar(100),
  `role_id` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `roles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE,
  `description` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `role_permissions` (
  `role_id` int,
  `permission_id` int
);

CREATE TABLE `events` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `description` text,
  `location` varchar(255),
  `date` datetime,
  `organizer_id` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `event_tickets` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `event_id` int,
  `user_id` int,
  `ticket_type` varchar(50),
  `price` decimal(10,2),
  `created_at` datetime
);

CREATE TABLE `resources` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `description` text,
  `file_url` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `panels` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `description` text,
  `livestream_url` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `pages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `content` text,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `sections` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `page_id` int,
  `title` varchar(255),
  `markdown_text` text,
  `image_url` varchar(255),
  `position` int,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `memberships` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE,
  `description` text,
  `tier_id` int,
  `benefits` text,
  `tracking_code` varchar(100),
  `renewal_date` datetime,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `membership_tiers` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE,
  `description` text,
  `price` decimal(10,2),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `forms` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(100),
  `content` text,
  `reply_by_email` boolean,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `homepage_banners` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `image_url` varchar(255),
  `link_url` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `discover_appt` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` text,
  `summary` text,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `settings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `language` varchar(50),
  `payment_integration_key` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `logs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `action` varchar(255),
  `timestamp` datetime,
  `created_at` datetime
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) UNIQUE,
  `description` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `nominations` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `nominee_name` varchar(255),
  `reason` text,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `partnerships` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` text,
  `contact_email` varchar(100),
  `created_at` datetime,
  `updated_at` datetime
);

ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `role_permissions` ADD FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`organizer_id`) REFERENCES `users` (`id`);

ALTER TABLE `event_tickets` ADD FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);

ALTER TABLE `event_tickets` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `sections` ADD FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`);

ALTER TABLE `memberships` ADD FOREIGN KEY (`tier_id`) REFERENCES `membership_tiers` (`id`);

ALTER TABLE `logs` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `nominations` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
