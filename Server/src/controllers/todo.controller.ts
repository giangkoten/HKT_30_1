import { HttpMessage, HttpStatus } from "./../utils/enum";
import * as todoService from "../services/todo.service";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    let [data]: any = await todoService.getAll();
    if (!Array.isArray(data)) {
      res.status(HttpStatus.ERROR).json({
        message: HttpMessage.FAILED,
      });
    }
    res.status(HttpStatus.SUCCESS).json({
      message: HttpMessage.SUCCESS,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    let { work } = req.body;
    await todoService.createOne(work);
    res.status(HttpStatus.CREATED).json({
      message: HttpMessage.CREATED,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;

    await todoService.deleteOneById(+id);
    res.status(HttpStatus.SUCCESS).json({
      message: HttpMessage.DELETED,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    await todoService.updateOne(+id);
    res.status(HttpStatus.SUCCESS).json({
      message: HttpMessage.UPDATE,
    });
  } catch (error) {
    console.log(error);
  }
};
