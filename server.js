import express from 'express';
import setupDatabase from './database.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Use the CORS middleware
app.use(cors());

app.use(express.json());

let db;

app.get('/form-data', async (req, res) => {
    const { app_id } = req.query;
    try {
        let appData;
        if (app_id) {
            appData = await db.all('SELECT * FROM app_data WHERE APP_ID = ?', app_id);
        } else {
            appData = await db.all('SELECT * FROM app_data');
        }
        res.json(appData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/form-data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appData = await db.get('SELECT * FROM app_data WHERE APP_ID = ?', id);
        if (appData) {
            res.json(appData);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/form-data', async (req, res) => {
    const data = req.body;
    try {
      const result = await db.run(
        `INSERT INTO app_data (
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
          data.APP_ID, data.APP_MIGRATION_ACTIVITY, data.APP_NAME,
          data.AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS, data.BUDGET_DIFFERENCE,
          data.BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION, data.BUDGET_REQUESTED,
          data.CLOUD_ROOM_ID, data.COMPLETION_ATTESTATION_DATE, data.COMPLETION_ATTESTATION_FUNDING_TOTAL,
          data.CRITICALITY, data.DASHBOARD_SCOPE, data.DB_CLOUD_TARGET, data.DB_MIGRATION_ACTIVITY, data.DEPARTMENT,
          data.FUNDABLE, data.FUNDABLE_REASON, data.FUNDING_GENERATED, data.HYPERSCALER, data.INFRASTRUCTURE_COMPONENTS,
          data.INITIAL_ATTESTATION_DATE, data.INITIAL_ATTESTATION_FUNDING_TOTAL, data.INTERFACES_IN_OUT,
          data.JIRA_FIX_VERSION_END, data.JIRA_FIX_VERSION_START, data.MAX_ACCEPTABLE_DOWNTIME,
          data.MIGRATION_METHOD, data.MIGRATION_PATH, data.PILOT, data.RESILIANCE_CLASS,
          data.RESULTING_AWS_T_SHIRT_LSV_JIRA, data.STORY_POINTS, data.STRATEGY_BUDGET_RECEIVED,
          data.T_SHIRT_INFRA_LSV, data.T_SHIRT_INTERFACES, data.TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS
        ]
      );
      res.status(201).json({ id: result.lastID });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/form-data/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const result = await db.run(
        `UPDATE app_data SET
          APP_MIGRATION_ACTIVITY = ?, APP_NAME = ?,
          AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS = ?, BUDGET_DIFFERENCE = ?,
          BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION = ?, BUDGET_REQUESTED = ?,
          CLOUD_ROOM_ID = ?, COMPLETION_ATTESTATION_DATE = ?, COMPLETION_ATTESTATION_FUNDING_TOTAL = ?,
          CRITICALITY = ?, DASHBOARD_SCOPE = ?, DB_CLOUD_TARGET = ?, DB_MIGRATION_ACTIVITY = ?, DEPARTMENT = ?,
          FUNDABLE = ?, FUNDABLE_REASON = ?, FUNDING_GENERATED = ?, HYPERSCALER = ?, INFRASTRUCTURE_COMPONENTS = ?,
          INITIAL_ATTESTATION_DATE = ?, INITIAL_ATTESTATION_FUNDING_TOTAL = ?, INTERFACES_IN_OUT = ?,
          JIRA_FIX_VERSION_END = ?, JIRA_FIX_VERSION_START = ?, MAX_ACCEPTABLE_DOWNTIME = ?,
          MIGRATION_METHOD = ?, MIGRATION_PATH = ?, PILOT = ?, RESILIANCE_CLASS = ?,
          RESULTING_AWS_T_SHIRT_LSV_JIRA = ?, STORY_POINTS = ?, STRATEGY_BUDGET_RECEIVED = ?,
          T_SHIRT_INFRA_LSV = ?, T_SHIRT_INTERFACES = ?, TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS = ?
        WHERE APP_ID = ?`,
        [
          data.APP_MIGRATION_ACTIVITY, data.APP_NAME,
          data.AS_IS_APPLICATION_TYPE_AND_TECH_STACK_TAGS, data.BUDGET_DIFFERENCE,
          data.BUDGET_REMAINING_AT_FG_T_3_AFTER_FUNDING_DISTRIBUTION, data.BUDGET_REQUESTED,
          data.CLOUD_ROOM_ID, data.COMPLETION_ATTESTATION_DATE, data.COMPLETION_ATTESTATION_FUNDING_TOTAL,
          data.CRITICALITY, data.DASHBOARD_SCOPE, data.DB_CLOUD_TARGET, data.DB_MIGRATION_ACTIVITY, data.DEPARTMENT,
          data.FUNDABLE, data.FUNDABLE_REASON, data.FUNDING_GENERATED, data.HYPERSCALER, data.INFRASTRUCTURE_COMPONENTS,
          data.INITIAL_ATTESTATION_DATE, data.INITIAL_ATTESTATION_FUNDING_TOTAL, data.INTERFACES_IN_OUT,
          data.JIRA_FIX_VERSION_END, data.JIRA_FIX_VERSION_START, data.MAX_ACCEPTABLE_DOWNTIME,
          data.MIGRATION_METHOD, data.MIGRATION_PATH, data.PILOT, data.RESILIANCE_CLASS,
          data.RESULTING_AWS_T_SHIRT_LSV_JIRA, data.STORY_POINTS, data.STRATEGY_BUDGET_RECEIVED,
          data.T_SHIRT_INFRA_LSV, data.T_SHIRT_INTERFACES, data.TARGET_ALL_APPLICATION_TYPE_AND_TECH_STACK_TAGS,
          id
        ]
      );
      if (result.changes === 0) {
        res.status(404).json({ error: 'Record not found' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.delete('/form-data/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.run('DELETE FROM app_data WHERE APP_ID = ?', id);
      if (result.changes === 0) {
        res.status(404).json({ error: 'Record not found' });
      } else {
        res.json({ message: 'Record deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(PORT, async () => {
  db = await setupDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});