import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_stats_background_color" AS ENUM('white', 'gray');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_background_color" AS ENUM('white', 'gray');
  CREATE TYPE "public"."enum_landing_page_features_items_icon" AS ENUM('chart', 'shield', 'clock', 'users', 'settings', 'smartphone');
  CREATE TABLE "pages_blocks_stats_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"suffix" varchar,
  	"label" varchar,
  	"description" varchar,
  	"percentage" numeric
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"background_color" "enum_pages_blocks_stats_background_color" DEFAULT 'white',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"suffix" varchar,
  	"label" varchar,
  	"description" varchar,
  	"percentage" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"background_color" "enum__pages_v_blocks_stats_background_color" DEFAULT 'white',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "landing_page_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "landing_page_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"icon" "enum_landing_page_features_items_icon",
  	"percentage" numeric
  );
  
  CREATE TABLE "landing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_subtitle" varchar,
  	"hero_description" varchar,
  	"hero_primary_button_text" varchar,
  	"hero_primary_button_url" varchar,
  	"hero_secondary_button_text" varchar,
  	"hero_secondary_button_url" varchar,
  	"hero_hero_image_id" integer,
  	"stats_title" varchar,
  	"features_title" varchar,
  	"features_description" varchar,
  	"posts_section_title" varchar,
  	"posts_section_description" varchar,
  	"posts_section_show_latest_posts" boolean DEFAULT true,
  	"posts_section_posts_limit" numeric DEFAULT 6,
  	"cta_title" varchar,
  	"cta_description" varchar,
  	"cta_button_text" varchar,
  	"cta_button_url" varchar,
  	"cta_background_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_stats_stats" ADD CONSTRAINT "pages_blocks_stats_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_stats" ADD CONSTRAINT "_pages_v_blocks_stats_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats" ADD CONSTRAINT "_pages_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_stats_items" ADD CONSTRAINT "landing_page_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page_features_items" ADD CONSTRAINT "landing_page_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."landing_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "landing_page" ADD CONSTRAINT "landing_page_cta_background_image_id_media_id_fk" FOREIGN KEY ("cta_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_stats_stats_order_idx" ON "pages_blocks_stats_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_stats_parent_id_idx" ON "pages_blocks_stats_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_stats_order_idx" ON "_pages_v_blocks_stats_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_stats_parent_id_idx" ON "_pages_v_blocks_stats_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_order_idx" ON "_pages_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_parent_id_idx" ON "_pages_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_path_idx" ON "_pages_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "landing_page_stats_items_order_idx" ON "landing_page_stats_items" USING btree ("_order");
  CREATE INDEX "landing_page_stats_items_parent_id_idx" ON "landing_page_stats_items" USING btree ("_parent_id");
  CREATE INDEX "landing_page_features_items_order_idx" ON "landing_page_features_items" USING btree ("_order");
  CREATE INDEX "landing_page_features_items_parent_id_idx" ON "landing_page_features_items" USING btree ("_parent_id");
  CREATE INDEX "landing_page_hero_hero_hero_image_idx" ON "landing_page" USING btree ("hero_hero_image_id");
  CREATE INDEX "landing_page_cta_cta_background_image_idx" ON "landing_page" USING btree ("cta_background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_stats_stats" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_stats" CASCADE;
  DROP TABLE "landing_page_stats_items" CASCADE;
  DROP TABLE "landing_page_features_items" CASCADE;
  DROP TABLE "landing_page" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_stats_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_stats_background_color";
  DROP TYPE "public"."enum_landing_page_features_items_icon";`)
}
