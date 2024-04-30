SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE account_friendship (
  id bigint(20) NOT NULL,
  created_at datetime(6) NOT NULL,
  status varchar(20) NOT NULL,
  created_by_id bigint(20) NOT NULL,
  created_for_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_keyword (
  id bigint(20) NOT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_language (
  id bigint(20) NOT NULL,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_programminglanguage (
  id bigint(20) NOT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user (
  id bigint(20) NOT NULL,
  password varchar(128) NOT NULL,
  last_login datetime(6) DEFAULT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  avatar varchar(2000) DEFAULT NULL,
  username varchar(255) NOT NULL,
  email varchar(254) NOT NULL,
  bio longtext NOT NULL,
  date_of_birth date DEFAULT NULL,
  phone_number varchar(10) NOT NULL,
  Country_name varchar(50) NOT NULL,
  is_active tinyint(1) NOT NULL,
  is_superuser tinyint(1) NOT NULL,
  is_staff tinyint(1) NOT NULL,
  points int(10) UNSIGNED NOT NULL CHECK (points >= 0),
  User_points int(10) UNSIGNED NOT NULL CHECK (User_points >= 0),
  city varchar(255) NOT NULL,
  facebook varchar(200) NOT NULL,
  github varchar(200) NOT NULL,
  job_position varchar(255) NOT NULL,
  linkedin varchar(200) NOT NULL,
  portfolio varchar(200) NOT NULL,
  twitter varchar(200) NOT NULL,
  banner varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_friendship (
  id bigint(20) NOT NULL,
  from_user_id bigint(20) NOT NULL,
  to_user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_groups (
  id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL,
  group_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_keyword (
  id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL,
  keyword_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_languages (
  id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL,
  language_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_programminglanguage (
  id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL,
  programminglanguage_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE account_user_user_permissions (
  id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL,
  permission_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_comment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  user_id bigint(20) NOT NULL,
  image_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_contactrequest (
  id bigint(20) NOT NULL,
  message longtext NOT NULL,
  sent_at datetime(6) NOT NULL,
  is_accepted tinyint(1) NOT NULL,
  receiver_id bigint(20) NOT NULL,
  sender_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_designerprofile (
  id bigint(20) NOT NULL,
  bio longtext NOT NULL,
  location varchar(100) NOT NULL,
  portfolio_link varchar(200) DEFAULT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_designerprofile_followers (
  id bigint(20) NOT NULL,
  designerprofile_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_gallery (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  banner varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_gallery_tags (
  id bigint(20) NOT NULL,
  gallery_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_image (
  id bigint(20) NOT NULL,
  image varchar(2000) DEFAULT NULL,
  description longtext NOT NULL,
  uploaded_at datetime(6) NOT NULL,
  gallery_id bigint(20) NOT NULL,
  designer_id int(11) DEFAULT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE artgallery_tag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_group (
  id int(11) NOT NULL,
  name varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_group_permissions (
  id bigint(20) NOT NULL,
  group_id int(11) NOT NULL,
  permission_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_permission (
  id int(11) NOT NULL,
  name varchar(255) NOT NULL,
  content_type_id int(11) NOT NULL,
  codename varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_user (
  id int(11) NOT NULL,
  password varchar(128) NOT NULL,
  last_login datetime(6) DEFAULT NULL,
  is_superuser tinyint(1) NOT NULL,
  username varchar(150) NOT NULL,
  first_name varchar(150) NOT NULL,
  last_name varchar(150) NOT NULL,
  email varchar(254) NOT NULL,
  is_staff tinyint(1) NOT NULL,
  is_active tinyint(1) NOT NULL,
  date_joined datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_user_groups (
  id bigint(20) NOT NULL,
  user_id int(11) NOT NULL,
  group_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE auth_user_user_permissions (
  id bigint(20) NOT NULL,
  user_id int(11) NOT NULL,
  permission_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_blogpost (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  is_published tinyint(1) NOT NULL,
  featured_image varchar(2000) DEFAULT NULL,
  slug varchar(50) NOT NULL,
  author_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_blogpost_categories (
  id bigint(20) NOT NULL,
  blogpost_id bigint(20) NOT NULL,
  category_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_blogpost_tags (
  id bigint(20) NOT NULL,
  blogpost_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_category (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL,
  slug varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_comment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  post_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE blog_tag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL,
  slug varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE botchats_chatmessage (
  id bigint(20) NOT NULL,
  user_message longtext NOT NULL,
  bot_response longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE chat_conversation (
  id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE chat_conversation_participants (
  id bigint(20) NOT NULL,
  conversation_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE chat_message (
  id bigint(20) NOT NULL,
  body longtext NOT NULL,
  timestamp datetime(6) NOT NULL,
  conversation_id bigint(20) NOT NULL,
  sender_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_codeattachment (
  id bigint(20) NOT NULL,
  file varchar(100) NOT NULL,
  description longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_codereview (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  rating int(10) UNSIGNED NOT NULL CHECK (rating >= 0),
  created_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  user_id bigint(20) NOT NULL,
  code_snippet_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_codesnippet (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  code longtext NOT NULL,
  github_link varchar(200) DEFAULT NULL,
  language varchar(50) NOT NULL,
  created_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_codesnippet_attachments (
  id bigint(20) NOT NULL,
  codesnippet_id bigint(20) NOT NULL,
  codeattachment_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_codesnippet_tags (
  id bigint(20) NOT NULL,
  codesnippet_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_comment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  code_snippet_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codereview_tag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_codingchallenge (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  difficulty varchar(10) NOT NULL,
  created_at datetime(6) NOT NULL,
  points int(10) UNSIGNED NOT NULL CHECK (points >= 0),
  author_id bigint(20) NOT NULL,
  solution longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_codingchallenge_tags (
  id bigint(20) NOT NULL,
  codingchallenge_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_codingchallenge_test_cases (
  id bigint(20) NOT NULL,
  codingchallenge_id bigint(20) NOT NULL,
  testcase_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_codingchallenge_winners (
  id bigint(20) NOT NULL,
  codingchallenge_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_solution (
  id bigint(20) NOT NULL,
  allsolution longtext NOT NULL,
  submitted_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  user_id bigint(20) NOT NULL,
  language varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_solution_challenge (
  id bigint(20) NOT NULL,
  solution_id bigint(20) NOT NULL,
  codingchallenge_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_tag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE codingchallenges_testcase (
  id bigint(20) NOT NULL,
  input_data longtext NOT NULL,
  expected_output longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE custom_token (
  id bigint(20) NOT NULL,
  jti varchar(255) NOT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE django_admin_log (
  id int(11) NOT NULL,
  action_time datetime(6) NOT NULL,
  object_id longtext DEFAULT NULL,
  object_repr varchar(200) NOT NULL,
  action_flag smallint(5) UNSIGNED NOT NULL CHECK (action_flag >= 0),
  change_message longtext NOT NULL,
  content_type_id int(11) DEFAULT NULL,
  user_id int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE django_content_type (
  id int(11) NOT NULL,
  app_label varchar(100) NOT NULL,
  model varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE django_migrations (
  id bigint(20) NOT NULL,
  app varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  applied datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE django_session (
  session_key varchar(40) NOT NULL,
  session_data longtext NOT NULL,
  expire_date datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE events_event (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  start_date datetime(6) NOT NULL,
  end_date datetime(6) NOT NULL,
  location varchar(255) NOT NULL,
  event_type varchar(10) NOT NULL,
  organizer_id bigint(20) NOT NULL,
  gapy_number varchar(20) DEFAULT NULL,
  qr_code varchar(2000) DEFAULT NULL,
  image varchar(2000) DEFAULT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE events_participant (
  id bigint(20) NOT NULL,
  joined_at datetime(6) NOT NULL,
  event_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE events_payment (
  id bigint(20) NOT NULL,
  amount decimal(10,2) NOT NULL,
  payment_date datetime(6) NOT NULL,
  is_successful tinyint(1) NOT NULL,
  event_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE events_virtualevent (
  id bigint(20) NOT NULL,
  platform varchar(100) NOT NULL,
  meeting_link varchar(200) NOT NULL,
  event_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumpost (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  author_id bigint(20) NOT NULL,
  parent_post_id bigint(20) DEFAULT NULL,
  topic_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumreply (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  author_id bigint(20) NOT NULL,
  post_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumreply_likes (
  id bigint(20) NOT NULL,
  forumreply_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumtag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumtopic (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  created_at datetime(6) NOT NULL,
  creator_id bigint(20) NOT NULL,
  description longtext NOT NULL,
  image varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE forum_forumtopic_tags (
  id bigint(20) NOT NULL,
  forumtopic_id bigint(20) NOT NULL,
  forumtag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_benefit (
  id bigint(20) NOT NULL,
  name varchar(100) NOT NULL,
  slug varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobcategory (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL,
  slug varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobposting (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  company_name varchar(255) NOT NULL,
  location varchar(100) NOT NULL,
  description longtext NOT NULL,
  requirements longtext NOT NULL,
  posted_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  application_email varchar(254) NOT NULL,
  application_deadline datetime(6) DEFAULT NULL,
  salary_min decimal(10,2) DEFAULT NULL,
  salary_max decimal(10,2) DEFAULT NULL,
  is_featured tinyint(1) NOT NULL,
  application_tracking_link varchar(200) NOT NULL,
  posted_by_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  logo varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobposting_benefits (
  id bigint(20) NOT NULL,
  jobposting_id bigint(20) NOT NULL,
  benefit_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobposting_categories (
  id bigint(20) NOT NULL,
  jobposting_id bigint(20) NOT NULL,
  jobcategory_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobposting_persons (
  id bigint(20) NOT NULL,
  jobposting_id bigint(20) NOT NULL,
  person_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_jobposting_skills_required (
  id bigint(20) NOT NULL,
  jobposting_id bigint(20) NOT NULL,
  skill_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_person (
  id bigint(20) NOT NULL,
  role varchar(50) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE jobportal_skill (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL,
  slug varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_availabilitytime (
  id bigint(20) NOT NULL,
  day varchar(20) NOT NULL,
  start_time time(6) NOT NULL,
  end_time time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_collaboratedproject (
  id bigint(20) NOT NULL,
  name varchar(255) NOT NULL,
  description longtext NOT NULL,
  githublink longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_collaboratedproject_collaborators (
  id bigint(20) NOT NULL,
  collaboratedproject_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_collaborationinterest (
  id bigint(20) NOT NULL,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_communicationmethod (
  id bigint(20) NOT NULL,
  detail varchar(255) NOT NULL,
  is_primary tinyint(1) NOT NULL,
  user_profile_id bigint(20) NOT NULL,
  platform_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_communicationplatform (
  id bigint(20) NOT NULL,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile (
  id bigint(20) NOT NULL,
  bio longtext NOT NULL,
  location varchar(100) NOT NULL,
  is_available tinyint(1) NOT NULL,
  user_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile_availability_times (
  id bigint(20) NOT NULL,
  languageexchangeprofile_id bigint(20) NOT NULL,
  availabilitytime_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile_collaboration_interests (
  id bigint(20) NOT NULL,
  languageexchangeprofile_id bigint(20) NOT NULL,
  collaborationinterest_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile_communication_methods (
  id bigint(20) NOT NULL,
  languageexchangeprofile_id bigint(20) NOT NULL,
  communicationmethod_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile_programming_languages (
  id bigint(20) NOT NULL,
  languageexchangeprofile_id bigint(20) NOT NULL,
  programminglanguage_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageexchangeprofile_projects_collaborated (
  id bigint(20) NOT NULL,
  languageexchangeprofile_id bigint(20) NOT NULL,
  collaboratedproject_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_languageteaching (
  id bigint(20) NOT NULL,
  learner_profile_id bigint(20) NOT NULL,
  teacher_profile_id bigint(20) NOT NULL,
  language_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE languageexchange_programminglanguage (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_category (
  id bigint(20) NOT NULL,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_comment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  user_id bigint(20) NOT NULL,
  resource_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_learningresource (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  url varchar(200) NOT NULL,
  file varchar(2000) DEFAULT NULL,
  created_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_learningresource_categories (
  id bigint(20) NOT NULL,
  learningresource_id bigint(20) NOT NULL,
  category_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_learningresource_tags (
  id bigint(20) NOT NULL,
  learningresource_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE learningresources_tag (
  id bigint(20) NOT NULL,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_contactmethod (
  id bigint(20) NOT NULL,
  method varchar(50) NOT NULL,
  value varchar(255) NOT NULL,
  mentor_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorcomment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  mentee_id bigint(20) NOT NULL,
  mentor_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile (
  id bigint(20) NOT NULL,
  expertise longtext NOT NULL,
  availability varchar(100) NOT NULL,
  feedback longtext NOT NULL,
  total_stars int(10) UNSIGNED NOT NULL CHECK (total_stars >= 0),
  total_ratings int(10) UNSIGNED NOT NULL CHECK (total_ratings >= 0),
  user_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile_accepted_mentees (
  id bigint(20) NOT NULL,
  mentorshipprofile_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile_comments (
  id bigint(20) NOT NULL,
  mentorshipprofile_id bigint(20) NOT NULL,
  mentorcomment_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile_contact_methods (
  id bigint(20) NOT NULL,
  mentorshipprofile_id bigint(20) NOT NULL,
  contactmethod_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile_mentees (
  id bigint(20) NOT NULL,
  mentorshipprofile_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_mentorshipprofile_shared_resources (
  id bigint(20) NOT NULL,
  mentorshipprofile_id bigint(20) NOT NULL,
  sharedresource_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_resourcefile (
  id bigint(20) NOT NULL,
  file varchar(100) NOT NULL,
  resource_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE mentorshipmatching_sharedresource (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  content longtext NOT NULL,
  created_at datetime(6) NOT NULL,
  receiver_id bigint(20) NOT NULL,
  sender_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_project (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  start_date date NOT NULL,
  end_date date DEFAULT NULL,
  is_published tinyint(1) NOT NULL,
  owner_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_projectcategory (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_projectimage (
  id bigint(20) NOT NULL,
  image varchar(2000) DEFAULT NULL,
  project_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_project_categories (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  projectcategory_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_project_collaborators (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_project_project_images (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  projectimage_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_project_technologies_used (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  technology_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_resume (
  id bigint(20) NOT NULL,
  resume_file varchar(2000) DEFAULT NULL,
  education longtext NOT NULL,
  work_experience longtext NOT NULL,
  skills longtext NOT NULL,
  contact_information longtext NOT NULL,
  user_id bigint(20) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE portfolio_technology (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE post_comment (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  user_id bigint(20) NOT NULL,
  post_id bigint(20) NOT NULL,
  created_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  updated_at datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE post_hashtag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL,
  created_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  updated_at datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE post_post (
  id bigint(20) NOT NULL,
  content longtext NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  image varchar(2000) DEFAULT NULL,
  comment_count int(10) UNSIGNED NOT NULL CHECK (comment_count >= 0),
  user_id bigint(20) NOT NULL,
  attach_files longtext DEFAULT NULL,
  created_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL,
  updated_at datetime(6) NOT NULL,
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE post_post_hashtags (
  id bigint(20) NOT NULL,
  post_id bigint(20) NOT NULL,
  hashtag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE post_user (
  id bigint(20) NOT NULL,
  created_at datetime(6) NOT NULL,
  updated_at datetime(6) NOT NULL,
  is_active tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_programminglanguage (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_project (
  id bigint(20) NOT NULL,
  title varchar(255) NOT NULL,
  description longtext NOT NULL,
  github_link varchar(2000) DEFAULT NULL,
  image varchar(2000) DEFAULT NULL,
  difficulty varchar(50) NOT NULL,
  domain varchar(50) NOT NULL,
  created_at datetime(6) NOT NULL,
  likes int(10) UNSIGNED NOT NULL CHECK (likes >= 0),
  dislikes int(10) UNSIGNED NOT NULL CHECK (dislikes >= 0),
  rating double NOT NULL,
  user_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_project_languages (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  programminglanguage_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_project_tags (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  tag_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_project_tools (
  id bigint(20) NOT NULL,
  project_id bigint(20) NOT NULL,
  tool_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_tag (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE projectrecommendations_tool (
  id bigint(20) NOT NULL,
  name varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE search_usersearchhistory (
  id bigint(20) NOT NULL,
  query varchar(255) NOT NULL,
  timestamp datetime(6) NOT NULL,
  user_id int(11) NOT NULL,
  count int(10) UNSIGNED NOT NULL CHECK (count >= 0),
  result varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE token_blacklist_blacklistedtoken (
  id bigint(20) NOT NULL,
  blacklisted_at datetime(6) NOT NULL,
  token_id bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE token_blacklist_outstandingtoken (
  id bigint(20) NOT NULL,
  token longtext NOT NULL,
  created_at datetime(6) DEFAULT NULL,
  expires_at datetime(6) NOT NULL,
  user_id int(11) DEFAULT NULL,
  jti varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE account_friendship
  ADD PRIMARY KEY (id),
  ADD KEY account_friendship_created_by_id_39aa4714_fk_account_user_id (created_by_id),
  ADD KEY account_friendship_created_for_id_4491d275_fk_account_user_id (created_for_id);

ALTER TABLE account_keyword
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE account_language
  ADD PRIMARY KEY (id);

ALTER TABLE account_programminglanguage
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE account_user
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY email (email),
  ADD UNIQUE KEY username (username),
  ADD UNIQUE KEY id_2 (id),
  ADD KEY id (id);

ALTER TABLE account_user_friendship
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_Friendship_from_user_id_to_user_id_2b8de03f_uniq (from_user_id,to_user_id),
  ADD KEY account_user_Friendship_to_user_id_f74f9248_fk_account_user_id (to_user_id);

ALTER TABLE account_user_groups
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_groups_user_id_group_id_4d09af3e_uniq (user_id,group_id),
  ADD KEY account_user_groups_group_id_6c71f749_fk_auth_group_id (group_id);

ALTER TABLE account_user_keyword
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_Keyword_user_id_keyword_id_36f3fb5f_uniq (user_id,keyword_id),
  ADD KEY account_user_Keyword_keyword_id_ca79f4c9_fk_account_keyword_id (keyword_id);

ALTER TABLE account_user_languages
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_languages_user_id_language_id_0d0e037f_uniq (user_id,language_id),
  ADD KEY account_user_languag_language_id_7cf7aaf0_fk_account_l (language_id);

ALTER TABLE account_user_programminglanguage
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_Programming_user_id_programminglangu_8fe605c2_uniq (user_id,programminglanguage_id),
  ADD KEY account_user_Program_programminglanguage__0ccd9efb_fk_account_p (programminglanguage_id);

ALTER TABLE account_user_user_permissions
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY account_user_user_permis_user_id_permission_id_48bdd28b_uniq (user_id,permission_id),
  ADD KEY account_user_user_pe_permission_id_66c44191_fk_auth_perm (permission_id);

ALTER TABLE artgallery_comment
  ADD PRIMARY KEY (id),
  ADD KEY ArtGallery_comment_image_id_a9bf5ee9_fk_ArtGallery_image_id (image_id),
  ADD KEY ArtGallery_comment_user_id_0f07d356_fk_account_user_id (user_id);

ALTER TABLE artgallery_contactrequest
  ADD PRIMARY KEY (id),
  ADD KEY ArtGallery_contactre_receiver_id_37f6ddb2_fk_account_u (receiver_id),
  ADD KEY ArtGallery_contactrequest_sender_id_f497b3b6_fk_account_user_id (sender_id);

ALTER TABLE artgallery_designerprofile
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY user_id (user_id);

ALTER TABLE artgallery_designerprofile_followers
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY ArtGallery_designerprofi_designerprofile_id_user__b7c5214a_uniq (designerprofile_id,user_id),
  ADD KEY ArtGallery_designerp_user_id_0ec7f333_fk_account_u (user_id);

ALTER TABLE artgallery_gallery
  ADD PRIMARY KEY (id);

ALTER TABLE artgallery_gallery_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY ArtGallery_gallery_tags_gallery_id_tag_id_c7c84b55_uniq (gallery_id,tag_id),
  ADD KEY ArtGallery_gallery_tags_tag_id_68ba9114_fk_ArtGallery_tag_id (tag_id);

ALTER TABLE artgallery_image
  ADD PRIMARY KEY (id),
  ADD KEY ArtGallery_image_gallery_id_a4eb3e59_fk_ArtGallery_gallery_id (gallery_id);

ALTER TABLE artgallery_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE auth_group
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE auth_group_permissions
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY auth_group_permissions_group_id_permission_id_0cd325b0_uniq (group_id,permission_id),
  ADD KEY auth_group_permissio_permission_id_84c5c92e_fk_auth_perm (permission_id);

ALTER TABLE auth_permission
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY auth_permission_content_type_id_codename_01ab375a_uniq (content_type_id,codename);

ALTER TABLE auth_user
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY username (username);

ALTER TABLE auth_user_groups
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY auth_user_groups_user_id_group_id_94350c0c_uniq (user_id,group_id),
  ADD KEY auth_user_groups_group_id_97559544_fk_auth_group_id (group_id);

ALTER TABLE auth_user_user_permissions
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY auth_user_user_permissions_user_id_permission_id_14a6b632_uniq (user_id,permission_id),
  ADD KEY auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm (permission_id);

ALTER TABLE blog_blogpost
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY slug (slug),
  ADD KEY blog_blogpost_author_id_ffcc150f_fk_account_user_id (author_id);

ALTER TABLE blog_blogpost_categories
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY blog_blogpost_categories_blogpost_id_category_id_56f53022_uniq (blogpost_id,category_id),
  ADD KEY blog_blogpost_catego_category_id_67c7b662_fk_blog_cate (category_id);

ALTER TABLE blog_blogpost_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY blog_blogpost_tags_blogpost_id_tag_id_657ed214_uniq (blogpost_id,tag_id),
  ADD KEY blog_blogpost_tags_tag_id_680e7081_fk_blog_tag_id (tag_id);

ALTER TABLE blog_category
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name),
  ADD UNIQUE KEY slug (slug);

ALTER TABLE blog_comment
  ADD PRIMARY KEY (id),
  ADD KEY blog_comment_post_id_580e96ef_fk_blog_blogpost_id (post_id),
  ADD KEY blog_comment_user_id_59a54155_fk_account_user_id (user_id);

ALTER TABLE blog_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name),
  ADD UNIQUE KEY slug (slug);

ALTER TABLE botchats_chatmessage
  ADD PRIMARY KEY (id);

ALTER TABLE chat_conversation
  ADD PRIMARY KEY (id);

ALTER TABLE chat_conversation_participants
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY chat_conversation_partic_conversation_id_user_id_d4d01dfe_uniq (conversation_id,user_id),
  ADD KEY chat_conversation_pa_user_id_01493ead_fk_account_u (user_id);

ALTER TABLE chat_message
  ADD PRIMARY KEY (id),
  ADD KEY chat_message_sender_id_991c686c_fk_account_user_id (sender_id),
  ADD KEY chat_message_conversation_id_a1207bf4_fk (conversation_id);

ALTER TABLE codereview_codeattachment
  ADD PRIMARY KEY (id);

ALTER TABLE codereview_codereview
  ADD PRIMARY KEY (id),
  ADD KEY codereview_coderevie_code_snippet_id_79fe02b7_fk_coderevie (code_snippet_id),
  ADD KEY codereview_codereview_user_id_5b0f3523_fk_account_user_id (user_id);

ALTER TABLE codereview_codesnippet
  ADD PRIMARY KEY (id),
  ADD KEY codereview_codesnippet_user_id_965d0dde_fk_account_user_id (user_id);

ALTER TABLE codereview_codesnippet_attachments
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codereview_codesnippet_a_codesnippet_id_codeattac_89d7f60b_uniq (codesnippet_id,codeattachment_id),
  ADD KEY codereview_codesnipp_codeattachment_id_930fba94_fk_coderevie (codeattachment_id);

ALTER TABLE codereview_codesnippet_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codereview_codesnippet_tags_codesnippet_id_tag_id_60fa5e65_uniq (codesnippet_id,tag_id),
  ADD KEY codereview_codesnippet_tags_tag_id_286d97c6_fk_codereview_tag_id (tag_id);

ALTER TABLE codereview_comment
  ADD PRIMARY KEY (id),
  ADD KEY codereview_comment_code_snippet_id_2c1b3393_fk_coderevie (code_snippet_id),
  ADD KEY codereview_comment_user_id_b445cfd4_fk_account_user_id (user_id);

ALTER TABLE codereview_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE codingchallenges_codingchallenge
  ADD PRIMARY KEY (id),
  ADD KEY codingchallenges_cod_author_id_76af32d2_fk_account_u (author_id);

ALTER TABLE codingchallenges_codingchallenge_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codingchallenges_codingc_codingchallenge_id_tag_i_6137b45d_uniq (codingchallenge_id,tag_id),
  ADD KEY codingchallenges_cod_tag_id_dd8df099_fk_codingcha (tag_id);

ALTER TABLE codingchallenges_codingchallenge_test_cases
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codingchallenges_codingc_codingchallenge_id_testc_294e08eb_uniq (codingchallenge_id,testcase_id),
  ADD KEY codingchallenges_cod_testcase_id_70f79485_fk_codingcha (testcase_id);

ALTER TABLE codingchallenges_codingchallenge_winners
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codingchallenges_codingc_codingchallenge_id_user__08e4ce5c_uniq (codingchallenge_id,user_id),
  ADD KEY codingchallenges_cod_user_id_28b08b43_fk_account_u (user_id);

ALTER TABLE codingchallenges_solution
  ADD PRIMARY KEY (id);

ALTER TABLE codingchallenges_solution_challenge
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY codingchallenges_solutio_solution_id_codingchalle_ba0f3369_uniq (solution_id,codingchallenge_id),
  ADD KEY codingchallenges_sol_codingchallenge_id_0e3c2b7d_fk_codingcha (codingchallenge_id);

ALTER TABLE codingchallenges_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE codingchallenges_testcase
  ADD PRIMARY KEY (id);

ALTER TABLE custom_token
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY jti (jti),
  ADD KEY custom_token_user_id_a46e53dd_fk_account_user_id (user_id);

ALTER TABLE django_admin_log
  ADD PRIMARY KEY (id),
  ADD KEY django_admin_log_content_type_id_c4bce8eb_fk_django_co (content_type_id),
  ADD KEY django_admin_log_user_id_c564eba6_fk_auth_user_id (user_id);

ALTER TABLE django_content_type
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY django_content_type_app_label_model_76bd3d3b_uniq (app_label,model);

ALTER TABLE django_migrations
  ADD PRIMARY KEY (id);

ALTER TABLE django_session
  ADD PRIMARY KEY (session_key),
  ADD KEY django_session_expire_date_a5c62663 (expire_date);

ALTER TABLE events_event
  ADD PRIMARY KEY (id),
  ADD KEY events_event_organizer_id_3afa7809_fk_account_user_id (organizer_id);

ALTER TABLE events_participant
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY events_participant_event_id_user_id_83beb45c_uniq (event_id,user_id),
  ADD KEY events_participant_user_id_e8830a87_fk_account_user_id (user_id);

ALTER TABLE events_payment
  ADD PRIMARY KEY (id),
  ADD KEY events_payment_event_id_cf2168e2_fk_events_event_id (event_id),
  ADD KEY events_payment_user_id_a861d73e_fk_account_user_id (user_id);

ALTER TABLE events_virtualevent
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY event_id (event_id);

ALTER TABLE forum_forumpost
  ADD PRIMARY KEY (id),
  ADD KEY forum_forumpost_topic_id_fa90ed3b_fk_forum_forumtopic_id (topic_id),
  ADD KEY forum_forumpost_parent_post_id_ad2cb6f9_fk_forum_forumpost_id (parent_post_id),
  ADD KEY forum_forumpost_author_id_0af5ed03_fk_account_user_id (author_id);

ALTER TABLE forum_forumreply
  ADD PRIMARY KEY (id),
  ADD KEY forum_forumreply_post_id_e11921f2_fk_forum_forumpost_id (post_id),
  ADD KEY forum_forumreply_author_id_c1e96e44_fk_account_user_id (author_id);

ALTER TABLE forum_forumreply_likes
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY forum_forumreply_likes_forumreply_id_user_id_92712262_uniq (forumreply_id,user_id),
  ADD KEY forum_forumreply_likes_user_id_bfb17bcc_fk_account_user_id (user_id);

ALTER TABLE forum_forumtag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE forum_forumtopic
  ADD PRIMARY KEY (id),
  ADD KEY forum_forumtopic_creator_id_aca0d4b8_fk_account_user_id (creator_id);

ALTER TABLE forum_forumtopic_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY forum_forumtopic_tags_forumtopic_id_forumtag_id_992b1325_uniq (forumtopic_id,forumtag_id),
  ADD KEY forum_forumtopic_tags_forumtag_id_1424a46d_fk_forum_forumtag_id (forumtag_id);

ALTER TABLE jobportal_benefit
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name),
  ADD UNIQUE KEY slug (slug);

ALTER TABLE jobportal_jobcategory
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name),
  ADD UNIQUE KEY slug (slug);

ALTER TABLE jobportal_jobposting
  ADD PRIMARY KEY (id),
  ADD KEY jobportal_jobposting_posted_by_id_ba0f8503_fk_account_user_id (posted_by_id);

ALTER TABLE jobportal_jobposting_benefits
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY jobportal_jobposting_ben_jobposting_id_benefit_id_12135f19_uniq (jobposting_id,benefit_id),
  ADD KEY jobportal_jobposting_benefit_id_67cd10f4_fk_jobportal (benefit_id);

ALTER TABLE jobportal_jobposting_categories
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY jobportal_jobposting_cat_jobposting_id_jobcategor_a5250b83_uniq (jobposting_id,jobcategory_id),
  ADD KEY jobportal_jobposting_jobcategory_id_8162f2ef_fk_jobportal (jobcategory_id);

ALTER TABLE jobportal_jobposting_persons
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY jobportal_jobposting_per_jobposting_id_person_id_4c85327a_uniq (jobposting_id,person_id),
  ADD KEY jobportal_jobposting_person_id_275639fe_fk_jobportal (person_id);

ALTER TABLE jobportal_jobposting_skills_required
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY jobportal_jobposting_ski_jobposting_id_skill_id_0fa40f91_uniq (jobposting_id,skill_id),
  ADD KEY jobportal_jobposting_skill_id_056c07f0_fk_jobportal (skill_id);

ALTER TABLE jobportal_person
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY user_id (user_id);

ALTER TABLE jobportal_skill
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name),
  ADD UNIQUE KEY slug (slug);

ALTER TABLE languageexchange_availabilitytime
  ADD PRIMARY KEY (id);

ALTER TABLE languageexchange_collaboratedproject
  ADD PRIMARY KEY (id);

ALTER TABLE languageexchange_collaboratedproject_collaborators
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_collabo_collaboratedproject_id_u_3dd2c294_uniq (collaboratedproject_id,user_id),
  ADD KEY LanguageExchange_col_user_id_ff44ca1c_fk_account_u (user_id);

ALTER TABLE languageexchange_collaborationinterest
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE languageexchange_communicationmethod
  ADD PRIMARY KEY (id),
  ADD KEY LanguageExchange_com_user_profile_id_662369e3_fk_account_u (user_profile_id),
  ADD KEY LanguageExchange_com_platform_id_914fd8ec_fk_LanguageE (platform_id);

ALTER TABLE languageexchange_communicationplatform
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE languageexchange_languageexchangeprofile
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY user_id (user_id);

ALTER TABLE languageexchange_languageexchangeprofile_availability_times
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_languageexchangeprofile__89920db2_uniq (languageexchangeprofile_id,availabilitytime_id),
  ADD KEY LanguageExchange_lan_availabilitytime_id_61dc9de9_fk_LanguageE (availabilitytime_id);

ALTER TABLE languageexchange_languageexchangeprofile_collaboration_interests
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_languageexchangeprofile__9a35286f_uniq (languageexchangeprofile_id,collaborationinterest_id),
  ADD KEY LanguageExchange_lan_collaborationinteres_b7d98bf9_fk_LanguageE (collaborationinterest_id);

ALTER TABLE languageexchange_languageexchangeprofile_communication_methods
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_languageexchangeprofile__837bb349_uniq (languageexchangeprofile_id,communicationmethod_id),
  ADD KEY LanguageExchange_lan_communicationmethod__b14bd1b6_fk_LanguageE (communicationmethod_id);

ALTER TABLE languageexchange_languageexchangeprofile_programming_languages
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_languageexchangeprofile__3b9676e5_uniq (languageexchangeprofile_id,programminglanguage_id),
  ADD KEY LanguageExchange_lan_programminglanguage__2e3eee16_fk_LanguageE (programminglanguage_id);

ALTER TABLE languageexchange_languageexchangeprofile_projects_collaborated
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_languageexchangeprofile__119287ac_uniq (languageexchangeprofile_id,collaboratedproject_id),
  ADD KEY LanguageExchange_lan_collaboratedproject__2a5ecb53_fk_LanguageE (collaboratedproject_id);

ALTER TABLE languageexchange_languageteaching
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY LanguageExchange_languag_teacher_profile_id_learn_c4a4172a_uniq (teacher_profile_id,learner_profile_id,language_id),
  ADD KEY LanguageExchange_lan_learner_profile_id_f5dbd002_fk_LanguageE (learner_profile_id),
  ADD KEY LanguageExchange_lan_language_id_9b430e9e_fk_LanguageE (language_id);

ALTER TABLE languageexchange_programminglanguage
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE learningresources_category
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE learningresources_comment
  ADD PRIMARY KEY (id),
  ADD KEY learningresources_co_resource_id_7492d3a4_fk_learningr (resource_id),
  ADD KEY learningresources_comment_user_id_40f0dd3b_fk_account_user_id (user_id);

ALTER TABLE learningresources_learningresource
  ADD PRIMARY KEY (id);

ALTER TABLE learningresources_learningresource_categories
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY learningresources_learni_learningresource_id_cate_69ca0a86_uniq (learningresource_id,category_id),
  ADD KEY learningresources_le_category_id_823f1d15_fk_learningr (category_id);

ALTER TABLE learningresources_learningresource_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY learningresources_learni_learningresource_id_tag__4ea0ba86_uniq (learningresource_id,tag_id),
  ADD KEY learningresources_le_tag_id_e992fea2_fk_learningr (tag_id);

ALTER TABLE learningresources_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE mentorshipmatching_contactmethod
  ADD PRIMARY KEY (id),
  ADD KEY MentorshipMatching_c_mentor_id_eba7947f_fk_Mentorshi (mentor_id);

ALTER TABLE mentorshipmatching_mentorcomment
  ADD PRIMARY KEY (id),
  ADD KEY MentorshipMatching_m_mentor_id_db5a67d2_fk_Mentorshi (mentor_id),
  ADD KEY MentorshipMatching_m_mentee_id_521340c8_fk_account_u (mentee_id);

ALTER TABLE mentorshipmatching_mentorshipprofile
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY user_id (user_id);

ALTER TABLE mentorshipmatching_mentorshipprofile_accepted_mentees
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY MentorshipMatching_mento_mentorshipprofile_id_use_7871bd74_uniq (mentorshipprofile_id,user_id),
  ADD KEY MentorshipMatching_m_user_id_b64073e1_fk_account_u (user_id);

ALTER TABLE mentorshipmatching_mentorshipprofile_comments
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY MentorshipMatching_mento_mentorshipprofile_id_men_8d7b432c_uniq (mentorshipprofile_id,mentorcomment_id),
  ADD KEY MentorshipMatching_m_mentorcomment_id_9809b8c9_fk_Mentorshi (mentorcomment_id);

ALTER TABLE mentorshipmatching_mentorshipprofile_contact_methods
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY MentorshipMatching_mento_mentorshipprofile_id_con_ca8f77b8_uniq (mentorshipprofile_id,contactmethod_id),
  ADD KEY MentorshipMatching_m_contactmethod_id_d263f811_fk_Mentorshi (contactmethod_id);

ALTER TABLE mentorshipmatching_mentorshipprofile_mentees
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY MentorshipMatching_mento_mentorshipprofile_id_use_eaa42db2_uniq (mentorshipprofile_id,user_id),
  ADD KEY MentorshipMatching_m_user_id_5f2394e6_fk_account_u (user_id);

ALTER TABLE mentorshipmatching_mentorshipprofile_shared_resources
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY MentorshipMatching_mento_mentorshipprofile_id_sha_0e091efa_uniq (mentorshipprofile_id,sharedresource_id),
  ADD KEY MentorshipMatching_m_sharedresource_id_f5625377_fk_Mentorshi (sharedresource_id);

ALTER TABLE mentorshipmatching_resourcefile
  ADD PRIMARY KEY (id),
  ADD KEY MentorshipMatching_r_resource_id_5b635a56_fk_Mentorshi (resource_id);

ALTER TABLE mentorshipmatching_sharedresource
  ADD PRIMARY KEY (id),
  ADD KEY MentorshipMatching_s_receiver_id_7fffac5e_fk_account_u (receiver_id),
  ADD KEY MentorshipMatching_s_sender_id_2e716e33_fk_account_u (sender_id);

ALTER TABLE portfolio_project
  ADD PRIMARY KEY (id),
  ADD KEY portfolio_project_owner_id_d40ef29b_fk_account_user_id (owner_id);

ALTER TABLE portfolio_projectcategory
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE portfolio_projectimage
  ADD PRIMARY KEY (id),
  ADD KEY portfolio_projectima_project_id_9276d60f_fk_portfolio (project_id);

ALTER TABLE portfolio_project_categories
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY portfolio_project_catego_project_id_projectcatego_526347b9_uniq (project_id,projectcategory_id),
  ADD KEY portfolio_project_ca_projectcategory_id_8705f017_fk_portfolio (projectcategory_id);

ALTER TABLE portfolio_project_collaborators
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY portfolio_project_collaborators_project_id_user_id_2d6e494b_uniq (project_id,user_id),
  ADD KEY portfolio_project_co_user_id_3c627922_fk_account_u (user_id);

ALTER TABLE portfolio_project_project_images
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY portfolio_project_projec_project_id_projectimage__35a1afee_uniq (project_id,projectimage_id),
  ADD KEY portfolio_project_pr_projectimage_id_b3a432e9_fk_portfolio (projectimage_id);

ALTER TABLE portfolio_project_technologies_used
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY portfolio_project_techno_project_id_technology_id_c663ec96_uniq (project_id,technology_id),
  ADD KEY portfolio_project_te_technology_id_850a32d4_fk_portfolio (technology_id);

ALTER TABLE portfolio_resume
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY user_id (user_id);

ALTER TABLE portfolio_technology
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE post_comment
  ADD PRIMARY KEY (id),
  ADD KEY post_comment_user_id_cbfe4e66_fk_account_user_id (user_id),
  ADD KEY post_comment_post_id_ddc2d815_fk_post_post_id (post_id);

ALTER TABLE post_hashtag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY post_hashtag_name_6c8027f2_uniq (name);

ALTER TABLE post_post
  ADD PRIMARY KEY (id),
  ADD KEY post_post_user_id_b9c97aef_fk_account_user_id (user_id);

ALTER TABLE post_post_hashtags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY post_post_hashtags_post_id_hashtag_id_8ca8bc83_uniq (post_id,hashtag_id),
  ADD KEY post_post_hashtags_hashtag_id_fb5a5661_fk_post_hashtag_id (hashtag_id);

ALTER TABLE post_user
  ADD PRIMARY KEY (id);

ALTER TABLE projectrecommendations_programminglanguage
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE projectrecommendations_project
  ADD PRIMARY KEY (id),
  ADD KEY ProjectRecommendatio_user_id_a0ff8824_fk_account_u (user_id);

ALTER TABLE projectrecommendations_project_languages
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY ProjectRecommendations_p_project_id_programmingla_2069e127_uniq (project_id,programminglanguage_id),
  ADD KEY ProjectRecommendatio_programminglanguage__276f1d83_fk_ProjectRe (programminglanguage_id);

ALTER TABLE projectrecommendations_project_tags
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY ProjectRecommendations_p_project_id_tag_id_9562c143_uniq (project_id,tag_id),
  ADD KEY ProjectRecommendatio_tag_id_6caf126f_fk_ProjectRe (tag_id);

ALTER TABLE projectrecommendations_project_tools
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY ProjectRecommendations_p_project_id_tool_id_b2270813_uniq (project_id,tool_id),
  ADD KEY ProjectRecommendatio_tool_id_19050d26_fk_ProjectRe (tool_id);

ALTER TABLE projectrecommendations_tag
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE projectrecommendations_tool
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY name (name);

ALTER TABLE search_usersearchhistory
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY search_usersearchhistory_user_id_query_result_fe654d00_uniq (user_id,query,result);

ALTER TABLE token_blacklist_blacklistedtoken
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY token_id (token_id);

ALTER TABLE token_blacklist_outstandingtoken
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq (jti),
  ADD KEY token_blacklist_outs_user_id_83bc629a_fk_auth_user (user_id);


ALTER TABLE account_friendship
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_keyword
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_language
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_programminglanguage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_friendship
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_groups
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_keyword
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_languages
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_programminglanguage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE account_user_user_permissions
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_comment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_contactrequest
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_designerprofile
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_designerprofile_followers
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_gallery
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_gallery_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_image
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE artgallery_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_group
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_group_permissions
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_permission
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_user
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_user_groups
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE auth_user_user_permissions
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_blogpost
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_blogpost_categories
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_blogpost_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_category
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_comment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE blog_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE botchats_chatmessage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE chat_conversation
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE chat_conversation_participants
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE chat_message
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_codeattachment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_codereview
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_codesnippet
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_codesnippet_attachments
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_codesnippet_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_comment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codereview_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_codingchallenge
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_codingchallenge_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_codingchallenge_test_cases
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_codingchallenge_winners
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_solution
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_solution_challenge
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE codingchallenges_testcase
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE custom_token
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE django_admin_log
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE django_content_type
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE django_migrations
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE events_event
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE events_participant
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE events_payment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE events_virtualevent
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumpost
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumreply
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumreply_likes
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumtag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumtopic
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE forum_forumtopic_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_benefit
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobcategory
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobposting
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobposting_benefits
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobposting_categories
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobposting_persons
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_jobposting_skills_required
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_person
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE jobportal_skill
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_availabilitytime
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_collaboratedproject
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_collaboratedproject_collaborators
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_collaborationinterest
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_communicationmethod
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_communicationplatform
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile_availability_times
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile_collaboration_interests
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile_communication_methods
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile_programming_languages
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageexchangeprofile_projects_collaborated
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_languageteaching
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE languageexchange_programminglanguage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_category
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_comment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_learningresource
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_learningresource_categories
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_learningresource_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE learningresources_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_contactmethod
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorcomment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile_accepted_mentees
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile_comments
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile_contact_methods
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile_mentees
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_mentorshipprofile_shared_resources
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_resourcefile
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE mentorshipmatching_sharedresource
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_project
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_projectcategory
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_projectimage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_project_categories
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_project_collaborators
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_project_project_images
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_project_technologies_used
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_resume
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE portfolio_technology
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE post_comment
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE post_hashtag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE post_post
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE post_post_hashtags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE post_user
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_programminglanguage
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_project
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_project_languages
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_project_tags
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_project_tools
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_tag
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE projectrecommendations_tool
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE search_usersearchhistory
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE token_blacklist_blacklistedtoken
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;

ALTER TABLE token_blacklist_outstandingtoken
  MODIFY id bigint(20) NOT NULL AUTO_INCREMENT;


ALTER TABLE account_friendship
  ADD CONSTRAINT account_friendship_created_by_id_39aa4714_fk_account_user_id FOREIGN KEY (created_by_id) REFERENCES account_user (id),
  ADD CONSTRAINT account_friendship_created_for_id_4491d275_fk_account_user_id FOREIGN KEY (created_for_id) REFERENCES account_user (id);

ALTER TABLE account_user_friendship
  ADD CONSTRAINT account_user_Friendship_from_user_id_74d62fb6_fk_account_user_id FOREIGN KEY (from_user_id) REFERENCES account_user (id),
  ADD CONSTRAINT account_user_Friendship_to_user_id_f74f9248_fk_account_user_id FOREIGN KEY (to_user_id) REFERENCES account_user (id);

ALTER TABLE account_user_groups
  ADD CONSTRAINT account_user_groups_group_id_6c71f749_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group (id),
  ADD CONSTRAINT account_user_groups_user_id_14345e7b_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE account_user_keyword
  ADD CONSTRAINT account_user_Keyword_keyword_id_ca79f4c9_fk_account_keyword_id FOREIGN KEY (keyword_id) REFERENCES account_keyword (id),
  ADD CONSTRAINT account_user_Keyword_user_id_2581b048_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE account_user_languages
  ADD CONSTRAINT account_user_languag_language_id_7cf7aaf0_fk_account_l FOREIGN KEY (language_id) REFERENCES account_language (id),
  ADD CONSTRAINT account_user_languages_user_id_13054e5f_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE account_user_programminglanguage
  ADD CONSTRAINT account_user_Program_programminglanguage__0ccd9efb_fk_account_p FOREIGN KEY (programminglanguage_id) REFERENCES account_programminglanguage (id),
  ADD CONSTRAINT account_user_Program_user_id_07d37a7b_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE account_user_user_permissions
  ADD CONSTRAINT account_user_user_pe_permission_id_66c44191_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth_permission (id),
  ADD CONSTRAINT account_user_user_pe_user_id_cc42d270_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE artgallery_comment
  ADD CONSTRAINT ArtGallery_comment_image_id_a9bf5ee9_fk_ArtGallery_image_id FOREIGN KEY (image_id) REFERENCES artgallery_image (id),
  ADD CONSTRAINT ArtGallery_comment_user_id_0f07d356_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE artgallery_contactrequest
  ADD CONSTRAINT ArtGallery_contactre_receiver_id_37f6ddb2_fk_account_u FOREIGN KEY (receiver_id) REFERENCES account_user (id),
  ADD CONSTRAINT ArtGallery_contactrequest_sender_id_f497b3b6_fk_account_user_id FOREIGN KEY (sender_id) REFERENCES account_user (id);

ALTER TABLE artgallery_designerprofile
  ADD CONSTRAINT ArtGallery_designerprofile_user_id_1bf0ec3b_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE artgallery_designerprofile_followers
  ADD CONSTRAINT ArtGallery_designerp_designerprofile_id_9d4520b0_fk_ArtGaller FOREIGN KEY (designerprofile_id) REFERENCES artgallery_designerprofile (id),
  ADD CONSTRAINT ArtGallery_designerp_user_id_0ec7f333_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE artgallery_gallery_tags
  ADD CONSTRAINT ArtGallery_gallery_t_gallery_id_76c5cf00_fk_ArtGaller FOREIGN KEY (gallery_id) REFERENCES artgallery_gallery (id),
  ADD CONSTRAINT ArtGallery_gallery_tags_tag_id_68ba9114_fk_ArtGallery_tag_id FOREIGN KEY (tag_id) REFERENCES artgallery_tag (id);

ALTER TABLE artgallery_image
  ADD CONSTRAINT ArtGallery_image_gallery_id_a4eb3e59_fk_ArtGallery_gallery_id FOREIGN KEY (gallery_id) REFERENCES artgallery_gallery (id);

ALTER TABLE auth_group_permissions
  ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth_permission (id),
  ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group (id);

ALTER TABLE auth_permission
  ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES django_content_type (id);

ALTER TABLE auth_user_groups
  ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group (id),
  ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user (id);

ALTER TABLE auth_user_user_permissions
  ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth_permission (id),
  ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user (id);

ALTER TABLE blog_blogpost
  ADD CONSTRAINT blog_blogpost_author_id_ffcc150f_fk_account_user_id FOREIGN KEY (author_id) REFERENCES account_user (id);

ALTER TABLE blog_blogpost_categories
  ADD CONSTRAINT blog_blogpost_catego_blogpost_id_daeea608_fk_blog_blog FOREIGN KEY (blogpost_id) REFERENCES blog_blogpost (id),
  ADD CONSTRAINT blog_blogpost_catego_category_id_67c7b662_fk_blog_cate FOREIGN KEY (category_id) REFERENCES blog_category (id);

ALTER TABLE blog_blogpost_tags
  ADD CONSTRAINT blog_blogpost_tags_blogpost_id_cdcddf6c_fk_blog_blogpost_id FOREIGN KEY (blogpost_id) REFERENCES blog_blogpost (id),
  ADD CONSTRAINT blog_blogpost_tags_tag_id_680e7081_fk_blog_tag_id FOREIGN KEY (tag_id) REFERENCES blog_tag (id);

ALTER TABLE blog_comment
  ADD CONSTRAINT blog_comment_post_id_580e96ef_fk_blog_blogpost_id FOREIGN KEY (post_id) REFERENCES blog_blogpost (id),
  ADD CONSTRAINT blog_comment_user_id_59a54155_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE chat_conversation_participants
  ADD CONSTRAINT chat_conversation_pa_user_id_01493ead_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id),
  ADD CONSTRAINT chat_conversation_participants_conversation_id_f3ae152d_fk FOREIGN KEY (conversation_id) REFERENCES chat_conversation (id);

ALTER TABLE chat_message
  ADD CONSTRAINT chat_message_conversation_id_a1207bf4_fk FOREIGN KEY (conversation_id) REFERENCES chat_conversation (id),
  ADD CONSTRAINT chat_message_sender_id_991c686c_fk_account_user_id FOREIGN KEY (sender_id) REFERENCES account_user (id);

ALTER TABLE codereview_codereview
  ADD CONSTRAINT codereview_coderevie_code_snippet_id_79fe02b7_fk_coderevie FOREIGN KEY (code_snippet_id) REFERENCES codereview_codesnippet (id),
  ADD CONSTRAINT codereview_codereview_user_id_5b0f3523_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE codereview_codesnippet
  ADD CONSTRAINT codereview_codesnippet_user_id_965d0dde_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE codereview_codesnippet_attachments
  ADD CONSTRAINT codereview_codesnipp_codeattachment_id_930fba94_fk_coderevie FOREIGN KEY (codeattachment_id) REFERENCES codereview_codeattachment (id),
  ADD CONSTRAINT codereview_codesnipp_codesnippet_id_4671462f_fk_coderevie FOREIGN KEY (codesnippet_id) REFERENCES codereview_codesnippet (id);

ALTER TABLE codereview_codesnippet_tags
  ADD CONSTRAINT codereview_codesnipp_codesnippet_id_aea9ba61_fk_coderevie FOREIGN KEY (codesnippet_id) REFERENCES codereview_codesnippet (id),
  ADD CONSTRAINT codereview_codesnippet_tags_tag_id_286d97c6_fk_codereview_tag_id FOREIGN KEY (tag_id) REFERENCES codereview_tag (id);

ALTER TABLE codereview_comment
  ADD CONSTRAINT codereview_comment_code_snippet_id_2c1b3393_fk_coderevie FOREIGN KEY (code_snippet_id) REFERENCES codereview_codesnippet (id),
  ADD CONSTRAINT codereview_comment_user_id_b445cfd4_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE codingchallenges_codingchallenge_tags
  ADD CONSTRAINT codingchallenges_cod_codingchallenge_id_9252d9f7_fk_codingcha FOREIGN KEY (codingchallenge_id) REFERENCES codingchallenges_codingchallenge (id),
  ADD CONSTRAINT codingchallenges_cod_tag_id_dd8df099_fk_codingcha FOREIGN KEY (tag_id) REFERENCES codingchallenges_tag (id);

ALTER TABLE codingchallenges_codingchallenge_test_cases
  ADD CONSTRAINT codingchallenges_cod_codingchallenge_id_52f56e9c_fk_codingcha FOREIGN KEY (codingchallenge_id) REFERENCES codingchallenges_codingchallenge (id),
  ADD CONSTRAINT codingchallenges_cod_testcase_id_70f79485_fk_codingcha FOREIGN KEY (testcase_id) REFERENCES codingchallenges_testcase (id);

ALTER TABLE codingchallenges_codingchallenge_winners
  ADD CONSTRAINT codingchallenges_cod_codingchallenge_id_0ad809d3_fk_codingcha FOREIGN KEY (codingchallenge_id) REFERENCES codingchallenges_codingchallenge (id),
  ADD CONSTRAINT codingchallenges_cod_user_id_28b08b43_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE codingchallenges_solution_challenge
  ADD CONSTRAINT codingchallenges_sol_codingchallenge_id_0e3c2b7d_fk_codingcha FOREIGN KEY (codingchallenge_id) REFERENCES codingchallenges_codingchallenge (id),
  ADD CONSTRAINT codingchallenges_sol_solution_id_38ec1299_fk_codingcha FOREIGN KEY (solution_id) REFERENCES codingchallenges_solution (id);

ALTER TABLE custom_token
  ADD CONSTRAINT custom_token_user_id_a46e53dd_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE django_admin_log
  ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES django_content_type (id),
  ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user (id);

ALTER TABLE events_event
  ADD CONSTRAINT events_event_organizer_id_3afa7809_fk_account_user_id FOREIGN KEY (organizer_id) REFERENCES account_user (id);

ALTER TABLE events_participant
  ADD CONSTRAINT events_participant_event_id_830b29bb_fk_events_event_id FOREIGN KEY (event_id) REFERENCES events_event (id),
  ADD CONSTRAINT events_participant_user_id_e8830a87_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE events_payment
  ADD CONSTRAINT events_payment_event_id_cf2168e2_fk_events_event_id FOREIGN KEY (event_id) REFERENCES events_event (id),
  ADD CONSTRAINT events_payment_user_id_a861d73e_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE events_virtualevent
  ADD CONSTRAINT events_virtualevent_event_id_5b5e2761_fk_events_event_id FOREIGN KEY (event_id) REFERENCES events_event (id);

ALTER TABLE forum_forumpost
  ADD CONSTRAINT forum_forumpost_author_id_0af5ed03_fk_account_user_id FOREIGN KEY (author_id) REFERENCES account_user (id),
  ADD CONSTRAINT forum_forumpost_parent_post_id_ad2cb6f9_fk_forum_forumpost_id FOREIGN KEY (parent_post_id) REFERENCES forum_forumpost (id),
  ADD CONSTRAINT forum_forumpost_topic_id_fa90ed3b_fk_forum_forumtopic_id FOREIGN KEY (topic_id) REFERENCES forum_forumtopic (id);

ALTER TABLE forum_forumreply
  ADD CONSTRAINT forum_forumreply_author_id_c1e96e44_fk_account_user_id FOREIGN KEY (author_id) REFERENCES account_user (id),
  ADD CONSTRAINT forum_forumreply_post_id_e11921f2_fk_forum_forumpost_id FOREIGN KEY (post_id) REFERENCES forum_forumpost (id);

ALTER TABLE forum_forumreply_likes
  ADD CONSTRAINT forum_forumreply_lik_forumreply_id_999582ac_fk_forum_for FOREIGN KEY (forumreply_id) REFERENCES forum_forumreply (id),
  ADD CONSTRAINT forum_forumreply_likes_user_id_bfb17bcc_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE forum_forumtopic
  ADD CONSTRAINT forum_forumtopic_creator_id_aca0d4b8_fk_account_user_id FOREIGN KEY (creator_id) REFERENCES account_user (id);

ALTER TABLE forum_forumtopic_tags
  ADD CONSTRAINT forum_forumtopic_tag_forumtopic_id_221cb156_fk_forum_for FOREIGN KEY (forumtopic_id) REFERENCES forum_forumtopic (id),
  ADD CONSTRAINT forum_forumtopic_tags_forumtag_id_1424a46d_fk_forum_forumtag_id FOREIGN KEY (forumtag_id) REFERENCES forum_forumtag (id);

ALTER TABLE jobportal_jobposting
  ADD CONSTRAINT jobportal_jobposting_posted_by_id_ba0f8503_fk_account_user_id FOREIGN KEY (posted_by_id) REFERENCES account_user (id);

ALTER TABLE jobportal_jobposting_benefits
  ADD CONSTRAINT jobportal_jobposting_benefit_id_67cd10f4_fk_jobportal FOREIGN KEY (benefit_id) REFERENCES jobportal_benefit (id),
  ADD CONSTRAINT jobportal_jobposting_jobposting_id_0ee845d7_fk_jobportal FOREIGN KEY (jobposting_id) REFERENCES jobportal_jobposting (id);

ALTER TABLE jobportal_jobposting_categories
  ADD CONSTRAINT jobportal_jobposting_jobcategory_id_8162f2ef_fk_jobportal FOREIGN KEY (jobcategory_id) REFERENCES jobportal_jobcategory (id),
  ADD CONSTRAINT jobportal_jobposting_jobposting_id_c4da19c5_fk_jobportal FOREIGN KEY (jobposting_id) REFERENCES jobportal_jobposting (id);

ALTER TABLE jobportal_jobposting_persons
  ADD CONSTRAINT jobportal_jobposting_jobposting_id_9608f0f9_fk_jobportal FOREIGN KEY (jobposting_id) REFERENCES jobportal_jobposting (id),
  ADD CONSTRAINT jobportal_jobposting_person_id_275639fe_fk_jobportal FOREIGN KEY (person_id) REFERENCES jobportal_person (id);

ALTER TABLE jobportal_jobposting_skills_required
  ADD CONSTRAINT jobportal_jobposting_jobposting_id_832d5a4f_fk_jobportal FOREIGN KEY (jobposting_id) REFERENCES jobportal_jobposting (id),
  ADD CONSTRAINT jobportal_jobposting_skill_id_056c07f0_fk_jobportal FOREIGN KEY (skill_id) REFERENCES jobportal_skill (id);

ALTER TABLE jobportal_person
  ADD CONSTRAINT jobportal_person_user_id_3e495b8a_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE languageexchange_collaboratedproject_collaborators
  ADD CONSTRAINT LanguageExchange_col_collaboratedproject__c783cc50_fk_LanguageE FOREIGN KEY (collaboratedproject_id) REFERENCES languageexchange_collaboratedproject (id),
  ADD CONSTRAINT LanguageExchange_col_user_id_ff44ca1c_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE languageexchange_communicationmethod
  ADD CONSTRAINT LanguageExchange_com_platform_id_914fd8ec_fk_LanguageE FOREIGN KEY (platform_id) REFERENCES languageexchange_communicationplatform (id),
  ADD CONSTRAINT LanguageExchange_com_user_profile_id_662369e3_fk_account_u FOREIGN KEY (user_profile_id) REFERENCES account_user (id);

ALTER TABLE languageexchange_languageexchangeprofile
  ADD CONSTRAINT LanguageExchange_lan_user_id_de29373a_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE languageexchange_languageexchangeprofile_availability_times
  ADD CONSTRAINT LanguageExchange_lan_availabilitytime_id_61dc9de9_fk_LanguageE FOREIGN KEY (availabilitytime_id) REFERENCES languageexchange_availabilitytime (id),
  ADD CONSTRAINT LanguageExchange_lan_languageexchangeprof_2e046efa_fk_LanguageE FOREIGN KEY (languageexchangeprofile_id) REFERENCES languageexchange_languageexchangeprofile (id);

ALTER TABLE languageexchange_languageexchangeprofile_collaboration_interests
  ADD CONSTRAINT LanguageExchange_lan_collaborationinteres_b7d98bf9_fk_LanguageE FOREIGN KEY (collaborationinterest_id) REFERENCES languageexchange_collaborationinterest (id),
  ADD CONSTRAINT LanguageExchange_lan_languageexchangeprof_5e4dafd4_fk_LanguageE FOREIGN KEY (languageexchangeprofile_id) REFERENCES languageexchange_languageexchangeprofile (id);

ALTER TABLE languageexchange_languageexchangeprofile_communication_methods
  ADD CONSTRAINT LanguageExchange_lan_communicationmethod__b14bd1b6_fk_LanguageE FOREIGN KEY (communicationmethod_id) REFERENCES languageexchange_communicationmethod (id),
  ADD CONSTRAINT LanguageExchange_lan_languageexchangeprof_1ad7b945_fk_LanguageE FOREIGN KEY (languageexchangeprofile_id) REFERENCES languageexchange_languageexchangeprofile (id);

ALTER TABLE languageexchange_languageexchangeprofile_programming_languages
  ADD CONSTRAINT LanguageExchange_lan_languageexchangeprof_87b3ebea_fk_LanguageE FOREIGN KEY (languageexchangeprofile_id) REFERENCES languageexchange_languageexchangeprofile (id),
  ADD CONSTRAINT LanguageExchange_lan_programminglanguage__2e3eee16_fk_LanguageE FOREIGN KEY (programminglanguage_id) REFERENCES languageexchange_programminglanguage (id);

ALTER TABLE languageexchange_languageexchangeprofile_projects_collaborated
  ADD CONSTRAINT LanguageExchange_lan_collaboratedproject__2a5ecb53_fk_LanguageE FOREIGN KEY (collaboratedproject_id) REFERENCES languageexchange_collaboratedproject (id),
  ADD CONSTRAINT LanguageExchange_lan_languageexchangeprof_df6a6f48_fk_LanguageE FOREIGN KEY (languageexchangeprofile_id) REFERENCES languageexchange_languageexchangeprofile (id);

ALTER TABLE languageexchange_languageteaching
  ADD CONSTRAINT LanguageExchange_lan_language_id_9b430e9e_fk_LanguageE FOREIGN KEY (language_id) REFERENCES languageexchange_programminglanguage (id),
  ADD CONSTRAINT LanguageExchange_lan_learner_profile_id_f5dbd002_fk_LanguageE FOREIGN KEY (learner_profile_id) REFERENCES languageexchange_languageexchangeprofile (id),
  ADD CONSTRAINT LanguageExchange_lan_teacher_profile_id_7bb549f4_fk_LanguageE FOREIGN KEY (teacher_profile_id) REFERENCES languageexchange_languageexchangeprofile (id);

ALTER TABLE learningresources_comment
  ADD CONSTRAINT learningresources_co_resource_id_7492d3a4_fk_learningr FOREIGN KEY (resource_id) REFERENCES learningresources_learningresource (id),
  ADD CONSTRAINT learningresources_comment_user_id_40f0dd3b_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE learningresources_learningresource_categories
  ADD CONSTRAINT learningresources_le_category_id_823f1d15_fk_learningr FOREIGN KEY (category_id) REFERENCES learningresources_category (id),
  ADD CONSTRAINT learningresources_le_learningresource_id_0a731be3_fk_learningr FOREIGN KEY (learningresource_id) REFERENCES learningresources_learningresource (id);

ALTER TABLE learningresources_learningresource_tags
  ADD CONSTRAINT learningresources_le_learningresource_id_4d9f3514_fk_learningr FOREIGN KEY (learningresource_id) REFERENCES learningresources_learningresource (id),
  ADD CONSTRAINT learningresources_le_tag_id_e992fea2_fk_learningr FOREIGN KEY (tag_id) REFERENCES learningresources_tag (id);

ALTER TABLE mentorshipmatching_contactmethod
  ADD CONSTRAINT MentorshipMatching_c_mentor_id_eba7947f_fk_Mentorshi FOREIGN KEY (mentor_id) REFERENCES mentorshipmatching_mentorshipprofile (id);

ALTER TABLE mentorshipmatching_mentorcomment
  ADD CONSTRAINT MentorshipMatching_m_mentee_id_521340c8_fk_account_u FOREIGN KEY (mentee_id) REFERENCES account_user (id),
  ADD CONSTRAINT MentorshipMatching_m_mentor_id_db5a67d2_fk_Mentorshi FOREIGN KEY (mentor_id) REFERENCES mentorshipmatching_mentorshipprofile (id);

ALTER TABLE mentorshipmatching_mentorshipprofile
  ADD CONSTRAINT MentorshipMatching_m_user_id_c3055da7_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE mentorshipmatching_mentorshipprofile_accepted_mentees
  ADD CONSTRAINT MentorshipMatching_m_mentorshipprofile_id_607ea5cf_fk_Mentorshi FOREIGN KEY (mentorshipprofile_id) REFERENCES mentorshipmatching_mentorshipprofile (id),
  ADD CONSTRAINT MentorshipMatching_m_user_id_b64073e1_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE mentorshipmatching_mentorshipprofile_comments
  ADD CONSTRAINT MentorshipMatching_m_mentorcomment_id_9809b8c9_fk_Mentorshi FOREIGN KEY (mentorcomment_id) REFERENCES mentorshipmatching_mentorcomment (id),
  ADD CONSTRAINT MentorshipMatching_m_mentorshipprofile_id_d08574b1_fk_Mentorshi FOREIGN KEY (mentorshipprofile_id) REFERENCES mentorshipmatching_mentorshipprofile (id);

ALTER TABLE mentorshipmatching_mentorshipprofile_contact_methods
  ADD CONSTRAINT MentorshipMatching_m_contactmethod_id_d263f811_fk_Mentorshi FOREIGN KEY (contactmethod_id) REFERENCES mentorshipmatching_contactmethod (id),
  ADD CONSTRAINT MentorshipMatching_m_mentorshipprofile_id_e147a2fa_fk_Mentorshi FOREIGN KEY (mentorshipprofile_id) REFERENCES mentorshipmatching_mentorshipprofile (id);

ALTER TABLE mentorshipmatching_mentorshipprofile_mentees
  ADD CONSTRAINT MentorshipMatching_m_mentorshipprofile_id_748cb0ce_fk_Mentorshi FOREIGN KEY (mentorshipprofile_id) REFERENCES mentorshipmatching_mentorshipprofile (id),
  ADD CONSTRAINT MentorshipMatching_m_user_id_5f2394e6_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE mentorshipmatching_mentorshipprofile_shared_resources
  ADD CONSTRAINT MentorshipMatching_m_mentorshipprofile_id_e04e2694_fk_Mentorshi FOREIGN KEY (mentorshipprofile_id) REFERENCES mentorshipmatching_mentorshipprofile (id),
  ADD CONSTRAINT MentorshipMatching_m_sharedresource_id_f5625377_fk_Mentorshi FOREIGN KEY (sharedresource_id) REFERENCES mentorshipmatching_sharedresource (id);

ALTER TABLE mentorshipmatching_resourcefile
  ADD CONSTRAINT MentorshipMatching_r_resource_id_5b635a56_fk_Mentorshi FOREIGN KEY (resource_id) REFERENCES mentorshipmatching_sharedresource (id);

ALTER TABLE mentorshipmatching_sharedresource
  ADD CONSTRAINT MentorshipMatching_s_receiver_id_7fffac5e_fk_account_u FOREIGN KEY (receiver_id) REFERENCES account_user (id),
  ADD CONSTRAINT MentorshipMatching_s_sender_id_2e716e33_fk_account_u FOREIGN KEY (sender_id) REFERENCES account_user (id);

ALTER TABLE portfolio_project
  ADD CONSTRAINT portfolio_project_owner_id_d40ef29b_fk_account_user_id FOREIGN KEY (owner_id) REFERENCES account_user (id);

ALTER TABLE portfolio_projectimage
  ADD CONSTRAINT portfolio_projectima_project_id_9276d60f_fk_portfolio FOREIGN KEY (project_id) REFERENCES portfolio_project (id);

ALTER TABLE portfolio_project_categories
  ADD CONSTRAINT portfolio_project_ca_project_id_e890386f_fk_portfolio FOREIGN KEY (project_id) REFERENCES portfolio_project (id),
  ADD CONSTRAINT portfolio_project_ca_projectcategory_id_8705f017_fk_portfolio FOREIGN KEY (projectcategory_id) REFERENCES portfolio_projectcategory (id);

ALTER TABLE portfolio_project_collaborators
  ADD CONSTRAINT portfolio_project_co_project_id_148f6f52_fk_portfolio FOREIGN KEY (project_id) REFERENCES portfolio_project (id),
  ADD CONSTRAINT portfolio_project_co_user_id_3c627922_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE portfolio_project_project_images
  ADD CONSTRAINT portfolio_project_pr_project_id_b5e59473_fk_portfolio FOREIGN KEY (project_id) REFERENCES portfolio_project (id),
  ADD CONSTRAINT portfolio_project_pr_projectimage_id_b3a432e9_fk_portfolio FOREIGN KEY (projectimage_id) REFERENCES portfolio_projectimage (id);

ALTER TABLE portfolio_project_technologies_used
  ADD CONSTRAINT portfolio_project_te_project_id_a51c3214_fk_portfolio FOREIGN KEY (project_id) REFERENCES portfolio_project (id),
  ADD CONSTRAINT portfolio_project_te_technology_id_850a32d4_fk_portfolio FOREIGN KEY (technology_id) REFERENCES portfolio_technology (id);

ALTER TABLE portfolio_resume
  ADD CONSTRAINT portfolio_resume_user_id_2d16569a_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE post_comment
  ADD CONSTRAINT post_comment_post_id_ddc2d815_fk_post_post_id FOREIGN KEY (post_id) REFERENCES post_post (id),
  ADD CONSTRAINT post_comment_user_id_cbfe4e66_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE post_post
  ADD CONSTRAINT post_post_user_id_b9c97aef_fk_account_user_id FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE post_post_hashtags
  ADD CONSTRAINT post_post_hashtags_hashtag_id_fb5a5661_fk_post_hashtag_id FOREIGN KEY (hashtag_id) REFERENCES post_hashtag (id),
  ADD CONSTRAINT post_post_hashtags_post_id_5c0ed7e0_fk_post_post_id FOREIGN KEY (post_id) REFERENCES post_post (id);

ALTER TABLE projectrecommendations_project
  ADD CONSTRAINT ProjectRecommendatio_user_id_a0ff8824_fk_account_u FOREIGN KEY (user_id) REFERENCES account_user (id);

ALTER TABLE projectrecommendations_project_languages
  ADD CONSTRAINT ProjectRecommendatio_programminglanguage__276f1d83_fk_ProjectRe FOREIGN KEY (programminglanguage_id) REFERENCES projectrecommendations_programminglanguage (id),
  ADD CONSTRAINT ProjectRecommendations_project_languages_project_id_3be2e095_fk FOREIGN KEY (project_id) REFERENCES projectrecommendations_project (id);

ALTER TABLE projectrecommendations_project_tags
  ADD CONSTRAINT ProjectRecommendatio_tag_id_6caf126f_fk_ProjectRe FOREIGN KEY (tag_id) REFERENCES projectrecommendations_tag (id),
  ADD CONSTRAINT ProjectRecommendations_project_tags_project_id_0d06afbb_fk FOREIGN KEY (project_id) REFERENCES projectrecommendations_project (id);

ALTER TABLE projectrecommendations_project_tools
  ADD CONSTRAINT ProjectRecommendatio_tool_id_19050d26_fk_ProjectRe FOREIGN KEY (tool_id) REFERENCES projectrecommendations_tool (id),
  ADD CONSTRAINT ProjectRecommendations_project_tools_project_id_f7d98a10_fk FOREIGN KEY (project_id) REFERENCES projectrecommendations_project (id);

ALTER TABLE search_usersearchhistory
  ADD CONSTRAINT search_usersearchhistory_user_id_4eb086a0_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES auth_user (id);

ALTER TABLE token_blacklist_blacklistedtoken
  ADD CONSTRAINT token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk FOREIGN KEY (token_id) REFERENCES token_blacklist_outstandingtoken (id);

ALTER TABLE token_blacklist_outstandingtoken
  ADD CONSTRAINT token_blacklist_outs_user_id_83bc629a_fk_auth_user FOREIGN KEY (user_id) REFERENCES auth_user (id);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
