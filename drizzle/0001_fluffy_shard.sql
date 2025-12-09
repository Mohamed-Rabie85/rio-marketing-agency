CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`category` varchar(100) NOT NULL,
	`author` varchar(255) DEFAULT 'محمد ربيع',
	`readTime` int DEFAULT 5,
	`featuredImage` varchar(500),
	`published` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`publishedAt` timestamp,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `case_studies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`clientName` varchar(255) NOT NULL,
	`industry` varchar(100),
	`challenge` text NOT NULL,
	`solution` text NOT NULL,
	`results` text NOT NULL,
	`metrics` text,
	`testimonial` text,
	`testimonialAuthor` varchar(255),
	`testimonialRole` varchar(255),
	`featuredImage` varchar(500),
	`caseStudyPDF` varchar(500),
	`published` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `case_studies_id` PRIMARY KEY(`id`),
	CONSTRAINT `case_studies_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `consultation_bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`company` varchar(255),
	`serviceType` varchar(255) NOT NULL,
	`preferredDate` timestamp,
	`preferredTime` varchar(50),
	`message` text,
	`status` enum('pending','confirmed','completed','cancelled') DEFAULT 'pending',
	`notificationSent` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `consultation_bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`company` varchar(255),
	`message` text NOT NULL,
	`subject` varchar(255),
	`read` boolean DEFAULT false,
	`responded` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`category` enum('execution','consulting') NOT NULL,
	`description` text NOT NULL,
	`features` text,
	`price` decimal(10,2),
	`duration` varchar(100),
	`icon` varchar(100),
	`order` int DEFAULT 0,
	`published` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `services_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientName` varchar(255) NOT NULL,
	`clientRole` varchar(255),
	`company` varchar(255),
	`content` text NOT NULL,
	`rating` int DEFAULT 5,
	`clientImage` varchar(500),
	`published` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
