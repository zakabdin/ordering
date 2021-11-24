import application from "./app";
import { PORT } from "./constants/constants";
import Services from "./service/services";

Services.getInstance().then(async (services: Services) => {
  application.services = services;
  application.app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});