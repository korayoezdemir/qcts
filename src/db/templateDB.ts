import { Template } from "../models/templateModel";
import { pool } from "./db";

//!  ---------------------------------- GET ALL---------------------------------------------------------

export const getAllTemplatesQuery = async (): Promise<Template[]> => {
  try {
    const { rows } = await pool.query("SELECT * FROM templates");
    return rows;
  } catch (error) {
    throw new Error("Failed to get all templates: " + (error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- INSERT NEW TEMPLATE ---------------------------------------------------------

export const insertTemplateQuery = async (
  template: Template
): Promise<Template> => {
  try {
    const { name, description, content, userId } = template;
    const { rows } = await pool.query(
      "INSERT INTO templates (name, description, content, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, content, userId]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Failed to insert template: " + (error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- UPDATE TEMPLATE ---------------------------------------------------------

export const updateTemplateQuery = async (
  template: Template
): Promise<Template> => {
  try {
    const { templateId, name, description, content, userId } = template;
    const { rows } = await pool.query(
      "UPDATE templates SET name = $1, description = $2, content = $3, user_id = $4 WHERE template_id = $5 RETURNING *",
      [name, description, content, userId, templateId]
    );
    if (rows.length === 0) {
      throw new Error(`Template with ID ${templateId} not found`);
    }
    return rows[0];
  } catch (error) {
    throw new Error("Failed to update template: " + (error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- DELETE TEMPLATE ---------------------------------------------------------

export const deleteTemplateQuery = async (
  templateId: number
): Promise<Template> => {
  try {
    const { rows } = await pool.query(
      "DELETE FROM templates WHERE template_id = $1 RETURNING *",
      [templateId]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Failed to delete template: " + (error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------
