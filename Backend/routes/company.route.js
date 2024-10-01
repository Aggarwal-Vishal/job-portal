import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(
  isAuthenticated,
  (req, res, next) => {
    console.log("GET/get/:id route called");
    next();
  },
  getCompanyById
);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
