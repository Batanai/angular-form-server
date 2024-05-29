import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function setupDatabase() {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS app_data (
      APP_ID TEXT PRIMARY KEY,
      APP_MIGRATION_ACTIVITY TEXT,
      APP_NAME TEXT,
      AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS TEXT,
      BUDGET_DIFFERENCE TEXT,
      BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION TEXT,
      BUDGET_REQUESTED TEXT,
      CLOUD_ROOM_ID TEXT,
      COMPLETION_ATTESTATION_DATE TEXT,
      COMPLETION_ATTESTATION_FUNDING_TOTAL TEXT,
      CRITICALITY TEXT,
      DASHBOARD_SCOPE TEXT,
      DB_CLOUD_TARGET TEXT,
      DB_MIGRATION_ACTIVITY TEXT,
      DEPARTMENT TEXT,
      FUNDABLE TEXT,
      FUNDABLE_REASON TEXT,
      FUNDING_GENERATED TEXT,
      HYPERSCALER TEXT,
      INFRASTRUCTURE_COMPONENTS TEXT,
      INITIAL_ATTESTATION_DATE TEXT,
      INITIAL_ATTESTATION_FUNDING_TOTAL TEXT,
      INTERFACES_IN_OUT TEXT,
      JIRA_FIX_VERSION_END TEXT,
      JIRA_FIX_VERSION_START TEXT,
      MAX_ACCEPTABLE_DOWNTIME TEXT,
      MIGRATION_METHOD TEXT,
      MIGRATION_PATH TEXT,
      PILOT TEXT,
      RESILIANCE_CLASS TEXT,
      RESULTING_AWS_T_SHIRT_LSV_JIRA TEXT,
      STORY_POINTS TEXT,
      STRATEGY_BUDGET_RECEIVED TEXT,
      T_SHIRT_INFRA_LSV TEXT,
      T_SHIRT_INTERFACES TEXT,
      TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS TEXT
    );
  `);

  await db.exec(`
    INSERT INTO app_data (
      APP_ID, APP_MIGRATION_ACTIVITY, APP_NAME,
      AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS, BUDGET_DIFFERENCE,
      BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION, BUDGET_REQUESTED,
      CLOUD_ROOM_ID, COMPLETION_ATTESTATION_DATE, COMPLETION_ATTESTATION_FUNDING_TOTAL,
      CRITICALITY, DASHBOARD_SCOPE, DB_CLOUD_TARGET, DB_MIGRATION_ACTIVITY, DEPARTMENT,
      FUNDABLE, FUNDABLE_REASON, FUNDING_GENERATED, HYPERSCALER, INFRASTRUCTURE_COMPONENTS,
      INITIAL_ATTESTATION_DATE, INITIAL_ATTESTATION_FUNDING_TOTAL, INTERFACES_IN_OUT,
      JIRA_FIX_VERSION_END, JIRA_FIX_VERSION_START, MAX_ACCEPTABLE_DOWNTIME,
      MIGRATION_METHOD, MIGRATION_PATH, PILOT, RESILIANCE_CLASS,
      RESULTING_AWS_T_SHIRT_LSV_JIRA, STORY_POINTS, STRATEGY_BUDGET_RECEIVED,
      T_SHIRT_INFRA_LSV, T_SHIRT_INTERFACES, TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS
    ) VALUES
    ('1', 'Activity 1', 'App 1', 'Tech Stack 1', '1000', '5000', '6000', 'Room 1', '2023-01-01', '7000', 'High', 'Scope 1', 'Target 1', 'DB Activity 1', 'Dept 1', 'Yes', 'Reason 1', 'Generated 1', 'Hyperscaler 1', 'Components 1', '2023-01-01', '8000', 'In/Out 1', '2023-12-31', '2023-01-01', '24h', 'Method 1', 'Path 1', 'Pilot 1', 'Class 1', 'LSV 1', '10', 'Received 1', 'LSV 1', 'Interfaces 1', 'Tags 1'),
    ('2', 'Activity 2', 'App 2', 'Tech Stack 2', '2000', '6000', '7000', 'Room 2', '2023-02-01', '8000', 'Medium', 'Scope 2', 'Target 2', 'DB Activity 2', 'Dept 2', 'No', 'Reason 2', 'Generated 2', 'Hyperscaler 2', 'Components 2', '2023-02-01', '9000', 'In/Out 2', '2023-11-30', '2023-02-01', '48h', 'Method 2', 'Path 2', 'Pilot 2', 'Class 2', 'LSV 2', '20', 'Received 2', 'LSV 2', 'Interfaces 2', 'Tags 2'),
    ('3', 'Activity 3', 'App 3', 'Tech Stack 3', '3000', '7000', '8000', 'Room 3', '2023-03-01', '9000', 'Low', 'Scope 3', 'Target 3', 'DB Activity 3', 'Dept 3', 'Yes', 'Reason 3', 'Generated 3', 'Hyperscaler 3', 'Components 3', '2023-03-01', '10000', 'In/Out 3', '2023-10-31', '2023-03-01', '72h', 'Method 3', 'Path 3', 'Pilot 3', 'Class 3', 'LSV 3', '30', 'Received 3', 'LSV 3', 'Interfaces 3', 'Tags 3'),
    ('4', 'Activity 4', 'App 4', 'Tech Stack 4', '4000', '8000', '9000', 'Room 4', '2023-04-01', '11000', 'Critical', 'Scope 4', 'Target 4', 'DB Activity 4', 'Dept 4', 'No', 'Reason 4', 'Generated 4', 'Hyperscaler 4', 'Components 4', '2023-04-01', '12000', 'In/Out 4', '2023-09-30', '2023-04-01', '96h', 'Method 4', 'Path 4', 'Pilot 4', 'Class 4', 'LSV 4', '40', 'Received 4', 'LSV 4', 'Interfaces 4', 'Tags 4'),
    ('5', 'Activity 5', 'App 5', 'Tech Stack 5', '5000', '9000', '10000', 'Room 5', '2023-05-01', '13000', 'Non-Critical', 'Scope 5', 'Target 5', 'DB Activity 5', 'Dept 5', 'Yes', 'Reason 5', 'Generated 5', 'Hyperscaler 5', 'Components 5', '2023-05-01', '14000', 'In/Out 5', '2023-08-31', '2023-05-01', '120h', 'Method 5', 'Path 5', 'Pilot 5', 'Class 5', 'LSV 5', '50', 'Received 5', 'LSV 5', 'Interfaces 5', 'Tags 5')
  `);

  for (let i = 6; i <= 55; i++) {
    await db.run(`
      INSERT INTO app_data (
        APP_ID, APP_MIGRATION_ACTIVITY, APP_NAME,
        AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS, BUDGET_DIFFERENCE,
        BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION, BUDGET_REQUESTED,
        CLOUD_ROOM_ID, COMPLETION_ATTESTATION_DATE, COMPLETION_ATTESTATION_FUNDING_TOTAL,
        CRITICALITY, DASHBOARD_SCOPE, DB_CLOUD_TARGET, DB_MIGRATION_ACTIVITY, DEPARTMENT,
        FUNDABLE, FUNDABLE_REASON, FUNDING_GENERATED, HYPERSCALER, INFRASTRUCTURE_COMPONENTS,
        INITIAL_ATTESTATION_DATE, INITIAL_ATTESTATION_FUNDING_TOTAL, INTERFACES_IN_OUT,
        JIRA_FIX_VERSION_END, JIRA_FIX_VERSION_START, MAX_ACCEPTABLE_DOWNTIME,
        MIGRATION_METHOD, MIGRATION_PATH, PILOT, RESILIANCE_CLASS,
        RESULTING_AWS_T_SHIRT_LSV_JIRA, STORY_POINTS, STRATEGY_BUDGET_RECEIVED,
        T_SHIRT_INFRA_LSV, T_SHIRT_INTERFACES, TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        i.toString(),
        `Activity ${i}`,
        `App ${i}`,
        `Tech Stack ${i}`,
        (i * 1000).toString(),
        (i * 2000).toString(),
        (i * 3000).toString(),
        `Room ${i}`,
        `2023-${String(i % 12 + 1).padStart(2, '0')}-01`,
        (i * 4000).toString(),
        ['High', 'Medium', 'Low', 'Critical', 'Non-Critical'][i % 5],
        `Scope ${i}`,
        `Target ${i}`,
        `DB Activity ${i}`,
        `Dept ${i}`,
        i % 2 === 0 ? 'Yes' : 'No',
        `Reason ${i}`,
        `Generated ${i}`,
        `Hyperscaler ${i}`,
        `Components ${i}`,
        `2023-${String(i % 12 + 1).padStart(2, '0')}-01`,
        (i * 5000).toString(),
        `In/Out ${i}`,
        `2023-${String(12 - (i % 12)).padStart(2, '0')}-30`,
        `2023-${String(i % 12 + 1).padStart(2, '0')}-01`,
        `${i * 24}h`,
        `Method ${i}`,
        `Path ${i}`,
        `Pilot ${i}`,
        `Class ${i}`,
        `LSV ${i}`,
        (i * 10).toString(),
        `Received ${i}`,
        `LSV ${i}`,
        `Interfaces ${i}`,
        `Tags ${i}`
      ]
    );
  }

  return db;
}

export default setupDatabase;