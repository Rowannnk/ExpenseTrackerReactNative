import express from "express";
import { sql } from "../config/db.js";
import {
  createTransaction,
  deleteTransaction,
  getTransactionsByUserId,
  getTransactionsSummary,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

router.delete("/:transactionId", deleteTransaction);

router.get("/summary/:userId", getTransactionsSummary);

export default router;
