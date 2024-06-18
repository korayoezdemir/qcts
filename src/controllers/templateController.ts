import { Request, Response } from "express";
import { Template } from "../models/templateModel";
import * as templateDB from "../db/templateDB";


//!  ---------------------------------- GET ---------------------------------------------------------

export const getAllTemplates = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const templates = await templateDB.getAllTemplatesQuery();
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- POST ---------------------------------------------------------

export const insertTemplate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const template: Template = req.body;
    const newTemplate = await templateDB.insertTemplateQuery(template);
    res.status(201).json(newTemplate);
  } catch (error) {
    console.log((error as Error).stack);
    res.status(500).send((error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- PUT ---------------------------------------------------------

export const updateTemplate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const template: Template = req.body;
    const updatedTemplate = await templateDB.updateTemplateQuery(template);
    res.status(200).json(updatedTemplate);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------

//!  ---------------------------------- DELETE ---------------------------------------------------------

export const deleteTemplate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const templateId = parseInt(req.params.id);
    const deletedTemplate = await templateDB.deleteTemplateQuery(templateId);
    res.status(200).json(deletedTemplate);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

//! -------------------------------------------------------------------------------------------------------
