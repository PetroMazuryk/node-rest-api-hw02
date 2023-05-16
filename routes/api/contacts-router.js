const express = require("express");
const ctrl = require("../../controllers/contacts-controller");
const schemas = require("../../schemas/contacts-schemas");
const { validateBody } = require("../../decorators");
const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", ctrl.deleteContactById);

router.put("/:id", validateBody(schemas.updateSchema), ctrl.updateContactById);

module.exports = router;
