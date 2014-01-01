# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131231051618) do

  create_table "applicant_courses", force: true do |t|
    t.integer  "course_id"
    t.integer  "applicant_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "payment_confirmed"
  end

  add_index "applicant_courses", ["applicant_id"], name: "index_applicant_courses_on_applicant_id"
  add_index "applicant_courses", ["course_id"], name: "index_applicant_courses_on_course_id"

  create_table "applicants", force: true do |t|
    t.string   "email"
    t.string   "name"
    t.string   "slug"
    t.integer  "phone_number"
    t.text     "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "total_paid"
  end

  create_table "courses", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "cost"
  end

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at"

end
