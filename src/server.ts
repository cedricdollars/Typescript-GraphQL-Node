import app from "./main/app";
import { mongooseService } from "./main/mongoose.service";

const log = console.log;
mongooseService.connect();
const PORT = Number(process.env.PORT || 8080);

app.listen(() => log(`[APP RUNNING 🚀]: Your server is up on ${PORT}`));
