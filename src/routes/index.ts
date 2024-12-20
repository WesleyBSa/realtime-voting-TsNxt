import { Router } from "express";
import { createPoll, getPolls, votePoll } from "../controllers/pollController";

const router = Router();

router.post("/polls", createPoll);
router.get("/polls", getPolls);
router.post("/polls/vote", votePoll);


export default router;
