import express from "express";
import { sql } from "../config/db.js";
import {
  createTransaction,
  deleteTransaction,
  getTransactionsByUserId,
  getTransactionsSummary,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.post("/", createTransaction);
router.delete("/:transactionId", deleteTransaction);
router.get("/summary/:userId", getTransactionsSummary);
router.get("/user/:userId", getTransactionsByUserId);

export default router;
