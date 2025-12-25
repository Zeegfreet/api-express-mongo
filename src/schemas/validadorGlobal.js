import mongoose from "mongoose";


mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value.trim() !== "",
    message: "{PATH} não pode ser vazio"
});