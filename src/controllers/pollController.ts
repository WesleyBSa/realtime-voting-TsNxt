import { Request, Response } from "express";
import Poll from "../models/Poll";
import Vote from "../models/Vote";

export const createPoll = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, options } = req.body;
    const poll = new Poll({ title, options, votes: {} });
    options.forEach((option: string) => (poll.votes[option] = 0));
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ error: "Failed to create poll" });
  }
};

export const getPolls = async (_req: Request, res: Response): Promise<void> => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch polls" });
  }
};

export const votePoll = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pollId, option } = req.body;
    const poll = await Poll.findById(pollId);
    if (!poll || !poll.options.includes(option)) {
      res.status(404).json({ error: "Poll or option not found" });
      return;
    }
    poll.votes[option] += 1;
    await poll.save();

    const vote = new Vote({ pollId, option });
    await vote.save();

    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ error: "Failed to vote" });
  }
};
