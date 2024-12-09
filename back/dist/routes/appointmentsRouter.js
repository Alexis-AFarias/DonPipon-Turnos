"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentsController_1.getAllAppointments);
appointmentRouter.get("/:appId", appointmentsController_1.getAppointmentById);
appointmentRouter.post("/schedule", appointmentsController_1.schedule);
appointmentRouter.put("/cancel/:appId", appointmentsController_1.cancel);
exports.default = appointmentRouter;